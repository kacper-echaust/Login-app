import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { InputField } from "./InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username must be at least 1 character",
  }),

  password: z.string().min(1, {
    message: "Password must be at least 1 character",
  }),
});

const LoginForm = () => {
  const { loginUser, error } = useAuth();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    loginUser(data);
  };
  return (
    <div className="max-w-sm flex items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputField control={form.control} name="username" />
          <InputField control={form.control} name="password" />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            className="cursor-pointer mt-5 w-full"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            Log in
          </Button>
          <Link to="/register">
            <p className="text-sm">Don't have an account?</p>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="cursor-pointer mt-2 w-full"
              disabled={form.formState.isSubmitting}
            >
              Register
            </Button>
          </Link>
        </form>
      </Form>
    </div>
  );
};

export { LoginForm };
