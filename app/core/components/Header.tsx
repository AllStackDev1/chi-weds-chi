import { ReactNode } from "react"
import { Flex } from "@chakra-ui/react"

const Header = ({ image, children }: { image: string; children?: ReactNode }) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      h={{ base: "70vh", md: "90vh" }}
      bgPos="0% -270px"
      bgSize="cover"
      px={{ base: 6, md: 0 }}
      bgImage={`linear-gradient(to right, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${image})`}
      // bgImage={`url(${image})`}
      rounded="md"
    >
      {children}
    </Flex>
  )
}

export default Header
