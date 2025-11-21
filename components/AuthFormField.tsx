import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldValues, Path } from "react-hook-form"

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>,
  name: Path<T>,
  label: string,
  placeholder?: string,
  type?: string
}

function AuthFormField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text"
}: FormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <Input {...field} placeholder={placeholder} type={type} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default AuthFormField;
