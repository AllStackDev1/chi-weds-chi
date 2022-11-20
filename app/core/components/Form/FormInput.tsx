import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input, InputGroup, InputProps, InputRightElement } from "@chakra-ui/input"
import {
  ComponentWithAs,
  FormErrorMessage,
  Icon,
  IconProps,
  InputLeftElement,
} from "@chakra-ui/react"
import { ComponentPropsWithoutRef, forwardRef, PropsWithoutRef } from "react"
import { useFormContext } from "react-hook-form"

export interface LabeledTextFieldProps extends ComponentPropsWithoutRef<typeof Input>, InputProps {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number" | "tel" | "file"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  leftElement?: boolean
  rightElement?: boolean
  icon?: ComponentWithAs<"svg", IconProps>
  props?: ComponentPropsWithoutRef<"input">
}

export const FormInput = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ label, outerProps, icon, labelProps, name, leftElement, rightElement, ...props }, ref) => {
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
        {label && (
          <FormLabel fontSize="sm" {...labelProps}>
            {label}
          </FormLabel>
        )}
        <InputGroup>
          {leftElement && (
            <InputLeftElement py={6}>
              <Icon as={icon} color="gray.400" />
            </InputLeftElement>
          )}
          <Input
            w="full"
            rounded="none"
            borderColor="darkBlue"
            height={14}
            bg="white"
            _placeholder={{ fontSize: "md" }}
            _hover={{ borderColor: "darkBlue", shadow: "none" }}
            _focus={{ borderColor: "darkBlue", shadow: "none" }}
            isDisabled={isSubmitting}
            {...register(name)}
            {...props}
          />
          {rightElement && (
            <InputRightElement>
              <Icon as={icon} color="border" />
            </InputRightElement>
          )}
        </InputGroup>
        {error && (
          <FormErrorMessage fontSize="sm" role="alert" color="red.500">
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    )
  }
)

FormInput.displayName = "FormInput"

export default FormInput
