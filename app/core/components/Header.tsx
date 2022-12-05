import { ReactNode } from "react"
import { Flex } from "@chakra-ui/react"

const Header = ({ image, children }: { image: string; children?: ReactNode }) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      h={{ base: "70vh", md: "90vh" }}
      bgPos="center"
      bgSize="cover"
      px={{ base: 6, md: 0 }}
      // bgImage={`linear-gradient(to right, rgba(247, 243, 241, .5), rgba(247, 243, 241, .5)), url(${image})`}
      bgImage={`url(${image})`}
    >
      {children}
    </Flex>
  )
}

export default Header
