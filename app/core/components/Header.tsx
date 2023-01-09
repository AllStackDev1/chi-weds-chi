import { ReactNode } from "react"
import { Box, Flex, FlexProps, Heading, Text } from "@chakra-ui/react"

const Header = ({
  image,
  children,
  ...rest
}: { image: string; children?: ReactNode } & FlexProps) => {
  return (
    <Flex
      w="full"
      as="header"
      rounded="md"
      pos="relative"
      align="center"
      bgPos="center"
      bgSize="cover"
      flexDir="column"
      justify="center"
      bgRepeat="no-repeat"
      px={{ base: 6, md: 0 }}
      h={{ base: "70vh", md: "90vh" }}
      bgImage={`linear-gradient(to right, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${image})`}
      {...rest}
    >
      {children}

      <Box pos="absolute" bottom={20}>
        <Heading as="h1" color="gold" opacity={0.7} fontSize={{ base: "4xl", md: "8xl" }}>
          21st January 2023
        </Heading>
      </Box>
    </Flex>
  )
}

export default Header
