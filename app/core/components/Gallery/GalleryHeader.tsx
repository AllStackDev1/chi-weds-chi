import React from "react"
import { Box, Flex, Heading, Icon, IconButton, Stack, Text } from "@chakra-ui/react"
import { BsArrowDown } from "react-icons/bs"
import moment from "moment"

const GalleryHeader = ({
  title,
  showButton,
  image,
  date,
}: {
  title: string
  showButton?: boolean
  image: string
  date?: string
}) => {
  return (
    <Flex
      align="center"
      justify="center"
      px={{ base: 6, sm: 10, lg: 16, xl: 40 }}
      bgImage={`linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(${image})`}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      h={{ base: "80vh", md: "100vh" }}
      direction="column"
      pos="relative"
      color="white"
    >
      <Stack textAlign="center">
        <Heading
          as="h1"
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl", xl: "8xl" }}
          lineHeight={{ base: "shorter", md: "none" }}
          fontWeight={900}
          textTransform="uppercase"
          letterSpacing={4}
        >
          {title}
        </Heading>
        {date ? <Text fontSize={{ md: "2xl" }}>{moment.utc(date).format("LL")}</Text> : null}
      </Stack>

      {showButton && (
        <Box pos="absolute" bottom={10}>
          <IconButton
            aria-label="arrow button"
            icon={<Icon as={BsArrowDown} boxSize={7} className="motion-safe:animate-bounce" />}
            rounded="full"
            variant="outline"
            borderColor="white"
            w={14}
            h={14}
            borderWidth={2}
            as="a"
            href="#gallery"
          />
        </Box>
      )}
    </Flex>
  )
}

export default GalleryHeader
