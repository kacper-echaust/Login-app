import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { InputField } from "./InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { Checkbox } from "../ui/checkbox";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters",
    })
    .max(15, {
      message: "Username must be max 15 characters.",
    }),
  password: z
    .string()
    .min(5, {
      message: "Password must be at least 5 characters.",
    })
    .max(15, {
      message: "Password must be max 15 characters.",
    })
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[{\]};:'",<.>/?\\|`~]).+$/,
      "Hasło musi zawierać co najmniej jedną wielką literę, cyfrę i znak specjalny"
    ),
  terms: z.boolean(),
});

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      terms: false,
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <div className="w-84   flex items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputField control={form.control} name="username" />
          <InputField control={form.control} name="password" />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked)}
                  />
                </FormControl>
                <FormLabel>Accept Terms</FormLabel>
              </FormItem>
            )}
          />
          <Button className="cursor-pointer mt-5 w-full" type="submit">
            Register
          </Button>
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="cursor-pointer mt-2 w-full"
          >
            Log in
          </Button>
        </form>
      </Form>
    </div>
  );
};

export { RegisterForm };
