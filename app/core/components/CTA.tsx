import { Heading, Stack, Text } from "@chakra-ui/react"
import Button from "./Button"
import Link from "next/link"
import { Link as ChakraLink } from "@chakra-ui/react"

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
      w="full"
      h={64}
      bg="#f7f3f1"
      align="center"
      justify="center"
      rounded="md"
      px={{ base: 6, md: 0 }}
      textAlign={{ base: "center", md: "inherit" }}
    >
      <Text color={"primaryBackground"} fontSize="sm" letterSpacing={2}>
        {subtitle}
      </Text>
      <Heading
        color={"primaryBackground"}
        as="h4"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="normal"
      >
        {title}
      </Heading>
      {btnTitle ? (
        <ChakraLink href="/rsvp" passHref as={Link}>
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
        </ChakraLink>
      ) : null}
    </Stack>
  )
}

export default Cta
