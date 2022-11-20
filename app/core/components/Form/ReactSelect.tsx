import React from "react"
import { Input } from "@chakra-ui/react"
import Select, { CSSObjectWithLabel } from "react-select"

const ReactSelect = ({
  options,
  setValue,
}: {
  options: string[]
  setValue: (selectedOption) => void
}) => {
  const handleSelectChange = (selectedOption) => {
    setValue(selectedOption.value)
  }

  const getOptions = () => {
    return options.map((option: string) => ({
      value: option.toLowerCase(),
      label: option.toUpperCase(),
    }))
  }

  return (
    <Input
      as={Select}
      bg="white"
      borderWidth={1}
      rounded="none"
      borderColor="darkBlue"
      _hover={{ borderColor: "darkBlue" }}
      _focus={{ borderColor: "darkBlue", borderWidth: 2 }}
      h={14}
      w={{ md: 56 }}
      display="flex"
      alignItems="center"
      textTransform="capitalize"
      isDisabled
      _disabled={{ opacity: 0.5, bg: "gray.400" }}
      options={getOptions()}
      onChange={handleSelectChange}
      components={{
        IndicatorSeparator: () => null,
        ClearIndicator: () => null,
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
            overflow: "hidden",
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
            overflow: "hidden",
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
    />
  )
}

export default ReactSelect
