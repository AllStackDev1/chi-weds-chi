import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Flex, FormErrorMessage, Textarea, TextareaProps } from "@chakra-ui/react"
import { ComponentPropsWithoutRef, forwardRef, PropsWithoutRef } from "react"
import { useFormContext } from "react-hook-form"

export interface LabeledTextFieldProps
  extends ComponentPropsWithoutRef<typeof Input>,
    TextareaProps {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
}

export const FormTextarea = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ label, outerProps, labelProps, name, ...props }, ref) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext()
    const error = Array.isArray(errors[name])
      ? // @ts-ignore
        errors[name].join(", ")
      : errors[name]?.message || errors[name]

    return (
      <FormControl ref={ref} {...outerProps}>
        <Flex align="center" justify="space-between">
          {label && (
            <FormLabel fontSize="sm" {...labelProps}>
              {label}
            </FormLabel>
          )}
        </Flex>
        <Textarea
          w="full"
          rounded="none"
          borderColor="darkBlue"
          bg="white"
          _placeholder={{ fontSize: "md" }}
          _hover={{ borderColor: "darkBlue", shadow: "none" }}
          _focus={{ borderColor: "darkBlue", shadow: "none" }}
          disabled={isSubmitting}
          {...register(name)}
          {...props}
        />
        {error && (
          <FormErrorMessage fontSize="sm" role="alert" color="red.500">
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    )
  }
)

FormTextarea.displayName = "FormTextarea"

export default FormTextarea
