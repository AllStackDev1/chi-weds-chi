import React from "react"
import { Box, Heading, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import moment from "moment"
import { Routes } from "@blitzjs/next"
import { BsArrowRight } from "react-icons/bs"
import Image from "../Image"

const GalleryItem = ({ gallery }) => {
  return (
    <Link href={Routes.ShowGalleryPage({ galleryId: gallery?.id })} scroll={true}>
      <Stack
        pos="relative"
        spacing={0}
        rounded="sm"
        overflow="hidden"
        color="white"
        _hover={{ color: "gray.100" }}
        transition="all 0.2s ease-in-out"
        cursor="pointer"
        className="group"
      >
        <Box bg="rgba(0,0,0,.4)" pos="absolute" zIndex={1} inset={0} />
        <Image src={gallery?.cover} alt={gallery?.name} />
        <Stack spacing={3} pos="absolute" bottom={4} left={5} zIndex={10}>
          <Stack spacing={0}>
            <Heading as="h3" fontSize={{ md: "2xl" }}>
              {gallery?.name}
            </Heading>
            <Text color="gray.200">{moment(gallery?.date).format("LL")}</Text>
          </Stack>
          <List>
            <ListItem>
              view gallery
              <ListIcon
                as={BsArrowRight}
                className="group-hover:motion-safe:animate-bounce"
                boxSize={5}
                ml={3}
              />
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Link>
  )
}

export default GalleryItem
