/* eslint-disable */
import {
  Flex,
  Text,
  Divider,
  CheckboxGroup,
  Checkbox,
  FormErrorMessage,
  Stack,
  StackProps,
} from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"
import { FormControl } from "@chakra-ui/form-control"

interface OptionsProp {
  id: string
  subtitle?: string
  options: string
}

export interface ICheckerBoxOptions {
  name: string
  title?: string
  subtitle?: string
  options: OptionsProp[] | any[]
  textFontSize?: any
  oneValueOnly: boolean
  checkBoxSize?: string
  showDivider?: boolean
  hasMulti?: boolean
}

const CheckingBoxes = (props: ICheckerBoxOptions & StackProps) => {
  const {
    name,
    title,
    subtitle,
    options,
    checkBoxSize,
    showDivider = true,
    textFontSize,
    oneValueOnly,
    hasMulti,
    ...rest
  } = props

  const {
    control,
    formState: { isSubmitting, errors },
  } = useFormContext()

  const error = Array.isArray(errors[name])
    ? // @ts-ignore
      errors[name].join(", ")
    : errors[name]?.message || errors[name]

  const getOptions = (_options: any) =>
    _options.map((option: any) => ({
      value: option,
      label: option,
    }))

  const optionsList = getOptions(options)

  return (
    <FormControl>
      {showDivider && <Divider color="border" w="full" />}
      <Stack>
        {hasMulti ? (
          <Stack>
            <Text fontWeight="bold" fontSize={{ lg: "lg" }}>
              {title}
            </Text>
            {options.map((option) => (
              <Stack spacing="2rem">
                <Stack mb={6}>
                  <Text>{option?.subtitle}</Text>
                  <Flex mt={2} w="full" align="center" justify="flex-start">
                    <Controller
                      control={control}
                      name={`${name}.${option?.id}`}
                      render={({ field: { onChange, value, ref } }) => {
                        return (
                          <CheckboxGroup
                            colorScheme="brandBlue"
                            onChange={(selectedOption) => {
                              if (oneValueOnly && selectedOption.length > 1) {
                                onChange(selectedOption[1] || "")
                              } else {
                                onChange(selectedOption)
                              }
                            }}
                            value={oneValueOnly ? [value || ""] : value}
                          >
                            <Stack
                              display={{ base: "block", sm: "flex" }}
                              spacing="1rem"
                              wrap="wrap"
                              {...rest}
                            >
                              {getOptions(option?.options)?.map((option: any) => (
                                <Checkbox
                                  ref={ref}
                                  key={option.value}
                                  size={checkBoxSize || "md"}
                                  value={option.value}
                                  borderColor="darkBlue"
                                  isChecked={option.value}
                                  isDisabled={isSubmitting}
                                >
                                  <Text fontSize={textFontSize || { base: "sm", md: "md" }}>
                                    {option.label}
                                  </Text>
                                </Checkbox>
                              ))}
                            </Stack>
                          </CheckboxGroup>
                        )
                      }}
                    />
                  </Flex>
                </Stack>
              </Stack>
            ))}
          </Stack>
        ) : (
          <Stack>
            <Stack>
              <Text fontWeight="bold" fontSize={{ lg: "lg" }}>
                {title}
              </Text>
              <Flex mt={2} w="full" align="center" justify="flex-start">
                <Controller
                  name={name}
                  control={control}
                  render={({ field: { onChange, value, ref } }) => {
                    return (
                      <CheckboxGroup
                        colorScheme="brandBlue"
                        onChange={(selectedOption) => {
                          if (oneValueOnly && selectedOption.length > 1) {
                            onChange(selectedOption[1] || "")
                          } else {
                            onChange(selectedOption)
                          }
                        }}
                        value={oneValueOnly ? [value || ""] : value}
                      >
                        <Stack
                          display={{ base: "block", sm: "flex" }}
                          spacing="1rem"
                          wrap="wrap"
                          direction={{ base: "row", sm: "column" }}
                          {...rest}
                        >
                          {optionsList?.map((option: any) => (
                            <Checkbox
                              ref={ref}
                              key={option.value}
                              size={checkBoxSize || "md"}
                              value={option.value}
                              borderColor="gray.500"
                              isChecked={option.value}
                              isDisabled={isSubmitting}
                            >
                              <Text
                                fontSize={textFontSize || { base: "sm", md: "md" }}
                                color="gray.600"
                              >
                                {option.label}
                              </Text>
                            </Checkbox>
                          ))}
                        </Stack>
                      </CheckboxGroup>
                    )
                  }}
                />
              </Flex>
            </Stack>
          </Stack>
        )}
      </Stack>
      {error && (
        <FormErrorMessage fontSize="sm" role="alert" color="red.500">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export default CheckingBoxes
