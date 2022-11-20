/* eslint-disable */
import ReactTagInput from "@pathofdev/react-tag-input"
import { FormLabel, FormControl, FormErrorMessage } from "@chakra-ui/react"

import "@pathofdev/react-tag-input/build/index.css"
import { Controller, useFormContext } from "react-hook-form"
import { Input } from "@chakra-ui/input"

type Props = {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  /** Field placeholder. */
  placeholder?: string
}

const FormTags = (props: Props) => {
  const { name, placeholder, label } = props
  const {
    formState: { errors },
    control,
  } = useFormContext()
  const error = Array.isArray(errors[name])
    ? // @ts-ignore
      errors[name].join(", ")
    : errors[name]?.message || errors[name]

  return (
    <FormControl>
      {label && <FormLabel fontSize="sm">{label}</FormLabel>}

      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => {
          const handleSelectChange = (selectedOption: any) => {
            return onChange(selectedOption)
          }

          return (
            <Input
              w="full"
              rounded="none"
              borderColor="darkBlue"
              height={14}
              bg="white"
              _placeholder={{ fontSize: "md" }}
              _hover={{ borderColor: "darkBlue", shadow: "none" }}
              _focus={{ borderColor: "darkBlue", shadow: "none" }}
              as={ReactTagInput}
              editable
              maxTags={20}
              tags={value}
              readOnly={false}
              removeOnBackspace
              placeholder={placeholder}
              onChange={handleSelectChange}
            />
          )
        }}
      />
      {error && (
        <FormErrorMessage fontSize="sm" role="alert" color="red.500">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export default FormTags
