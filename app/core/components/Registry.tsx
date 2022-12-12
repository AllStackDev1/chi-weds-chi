import { Heading, Stack, Text } from "@chakra-ui/react"
import Button from "./Button"
import Link from "next/link"
import { Link as ChakraLink } from "@chakra-ui/react"

const Registry = () => {
  return (
    <Stack
      align="center"
      justify="center"
      rounded="md"
      w={{ base: "full", lg: "3xl" }}
      textAlign={{ base: "center", md: "inherit" }}
    >
      <Heading color="gold" as="h3" fontSize={{ base: "3xl", md: "6xl" }}>
        Registry
      </Heading>
      <Text textAlign="center">
        The greatest gift of all is your presence on our special day, but a gift that will go toward
        building our future together is much appreciated. If you would like to get us a small gift,
        you can find some pre-selected items in the registry below. We greatly appreciate your
        generosity, and can’t wait to see you soon to celebrate.
      </Text>
      <ChakraLink target="_blank" href="https://paystack.shop/chineduamaka" passHref as={Link}>
        <Button
          mt={4}
          px={8}
          h={12}
          w="full"
          color="gold"
          rounded="none"
          variant="outline"
          borderColor="gold"
          _hover={{ bg: "none" }}
          _focus={{ bg: "none" }}
          title={"Visit Registry"}
        />
      </ChakraLink>
    </Stack>
  )
}

export default Registry
