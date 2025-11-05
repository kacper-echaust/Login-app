import type { Control } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import type { FormType } from "@/types";

type InputType = {
  control: Control<FormType, unknown, FormType>;
  name: "username" | "password";
};

const InputField = ({ control, name }: InputType) => {
  const label = [...name].map((letter, index) =>
    index === 0 ? letter.toUpperCase() : letter
  );
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className=" my-4 w-sm">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={`Enter ${name}`} {...field} type={name} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { InputField };
