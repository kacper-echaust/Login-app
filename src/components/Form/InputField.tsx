import type { Control, FieldValues, Path } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type InputType<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

const InputField = <T extends FieldValues>({ control, name }: InputType<T>) => {
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
