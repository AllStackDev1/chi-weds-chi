import React from "react"
import { Heading, Image, Stack, Text } from "@chakra-ui/react"

const Headings = ({
  standout,
  title,
  subtitle,
}: {
  standout: string
  title: string
  subtitle: string
}) => {
  return (
    <Stack align="center" justify="center" textAlign="center" w={{ md: 125 }} mx="auto">
      <Text>{standout}</Text>
      <Image src="/separator.png" alt="separator" />
      <Heading as="h3" fontSize={{ base: "3xl", md: "6xl" }}>
        {title}
      </Heading>
      <Text color="gray.500">{subtitle}</Text>
    </Stack>
  )
}

export default Headings
