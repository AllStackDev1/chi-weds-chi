import React from "react"
import { Heading, Stack, Text } from "@chakra-ui/react"
import Button from "./Button"
import Link from "next/link"

const Cta = ({
  btnTitle,
  subtitle,
  title,
}: {
  btnTitle?: string
  subtitle: string
  title: string
}) => {
  return (
    <Stack
      bg="#f7f3f1"
      align="center"
      justify="center"
      w="full"
      h={64}
      px={{ base: 6, md: 0 }}
      textAlign={{ base: "center", md: "inherit" }}
    >
      <Text color="gray.500" fontSize="sm" letterSpacing={2}>
        {subtitle}
      </Text>
      <Heading as="h4" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="normal">
        {title}
      </Heading>
      {btnTitle ? (
        <Link href="/rsvp" passHref>
          <Button
            mt={4}
            title={btnTitle}
            variant="outline"
            px={8}
            borderColor="black"
            rounded="none"
            color="black"
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
            w="full"
            h={12}
          />
        </Link>
      ) : null}
    </Stack>
  )
}

export default Cta
