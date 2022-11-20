import React from "react"
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react"

const Button = ({ title, ...rest }: { title: string } & ButtonProps) => {
  return <ChakraButton {...rest}>{title}</ChakraButton>
}

export default Button
