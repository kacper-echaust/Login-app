import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { InputField } from "./InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "../ui/checkbox";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

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
      "The password must contain at least one uppercase letter, number and special character."
    ),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms.",
  }),
});

const RegisterForm = () => {
  const { registerUser, error } = useAuth();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      terms: false,
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    registerUser(data);
  };
  return (
    <div className="w-84   flex items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {error && <p className="text-red-500 text-sm">{error}</p>}
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
                <FormLabel>Terms & Conditions</FormLabel>
              </FormItem>
            )}
          />

          <Button
            className="cursor-pointer mt-5 w-full"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            Register
          </Button>
          <Link to="/login">
            <p className="text-sm">Have an account?</p>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="cursor-pointer mt-2 w-full"
              disabled={form.formState.isSubmitting}
            >
              Log in
            </Button>
          </Link>
        </form>
      </Form>
    </div>
  );
};

export { RegisterForm };
