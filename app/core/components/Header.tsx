import { ReactNode } from "react"
import { Flex, FlexProps } from "@chakra-ui/react"

const Header = ({
  image,
  children,
  ...rest
}: { image: string; children?: ReactNode } & FlexProps) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      h={{ base: "70vh", md: "90vh" }}
      bgPos="center"
      bgSize="cover"
      px={{ base: 6, md: 0 }}
      bgImage={`linear-gradient(to right, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${image})`}
      // bgImage={`url(${image})`}
      bgRepeat="no-repeat"
      rounded="md"
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default Header
