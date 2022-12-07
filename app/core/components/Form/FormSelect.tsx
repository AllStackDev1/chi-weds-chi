/* eslint-disable */
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react"
import Select, { CSSObjectWithLabel } from "react-select"
import { Controller, useFormContext } from "react-hook-form"

type Props = {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  /** Field options. */
  options: any[]
  /** Field isMulti. */
  isMulti?: boolean
  placeholder?: string
  formWidth?: FormControlProps["width"]
} & InputProps

const DataListSelect = ({
  name,
  label,
  options,
  isMulti,
  placeholder,
  formWidth,
  ...rest
}: Props) => {
  const {
    formState: { errors },
    control,
  } = useFormContext()
  const error = Array.isArray(errors[name])
    ? // @ts-ignore
      errors[name].join(", ")
    : errors[name]?.message || errors[name]

  const getOptions = () => {
    return options.map((option: any) => ({
      value: option.value?.toLowerCase() || option,
      label: option.label?.toLowerCase() || option,
    }))
  }

  const optionsList = getOptions()

  return (
    <FormControl w={formWidth}>
      {label && (
        <FormLabel color="white" fontSize="sm" htmlFor="data-list-select">
          {label}
        </FormLabel>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ref } }) => {
          const handleSelectChange = (selectedOption: any) => {
            isMulti
              ? onChange(selectedOption.map((option: any) => option.value?.toLowerCase()))
              : onChange(
                  typeof selectedOption.value === "string"
                    ? selectedOption.value.toLowerCase()
                    : selectedOption.value
                )
          }

          return (
            <Input
              ref={ref}
              as={Select}
              bg="white"
              borderWidth={1}
              rounded="none"
              borderColor="darkBlue"
              _hover={{ borderColor: "darkBlue" }}
              _focus={{ borderColor: "darkBlue", borderWidth: 2 }}
              h={14}
              w={{ base: "full", md: "35rem" }}
              display="flex"
              alignItems="center"
              textTransform="capitalize"
              placeholder={placeholder}
              _disabled={{ opacity: 0.5, bg: "gray.400" }}
              options={optionsList}
              value={
                isMulti
                  ? (optionsList.filter((c: { value: any }) => value?.includes(c.value)) as any)
                  : (optionsList.find((c: { value: any }) => c.value === value) as any)
              }
              onChange={handleSelectChange}
              isMulti={isMulti}
              components={{
                IndicatorSeparator: () => null,
                ClearIndicator: () => null,
                // MultiValueContainer: () => null,
              }}
              styles={{
                valueContainer(provided: CSSObjectWithLabel) {
                  return {
                    ...provided,
                    fontSize: "14px",
                    width: "100%",
                  }
                },
                singleValue(provided: CSSObjectWithLabel) {
                  return {
                    ...provided,
                    color: "#1B4066",
                  }
                },
                control(provided: CSSObjectWithLabel) {
                  return {
                    ...provided,
                    width: "100%",
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "none",
                    "&:hover": {
                      borderColor: "none",
                    },
                  }
                },
                menu(provided: any) {
                  return {
                    ...provided,
                    marginLeft: "-15px",
                    marginTop: "15px",
                  }
                },
                option(provided: any, { isSelected }: any) {
                  return {
                    ...provided,
                    color: isSelected ? "white" : "#141414",
                    backgroundColor: isSelected ? "#f91e53" : "none",
                    "&:hover": {
                      backgroundColor: "#f91e53",
                      color: "white",
                    },
                  }
                },
              }}
              {...rest}
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

export default DataListSelect
