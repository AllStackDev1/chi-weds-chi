import React from "react"
import { Divider, Heading, HStack, Stack } from "@chakra-ui/react"
import Link from "next/link"
import { NavLink } from "./NavLink"

export const navLinks = [
  // { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Invitation", path: "/invitation" },
  {
    id: 3,
    name: "Locations",
    path: "/locations",
  },
  {
    id: 4,
    name: "rsvp",
    path: "/rsvp",
  },
  {
    id: 5,
    name: "gallery",
    path: "/gallery",
  },
]

const Nav = () => {
  return (
    <Stack
      as="nav"
      insetX={10}
      zIndex={100}
      bg="transparent"
      align="center"
      justify="center"
      textAlign="center"
      pos={{ md: "absolute" }}
      py={{ base: 4, md: 0 }}
      spacing={{ base: 4, md: 10 }}
    >
      <Link href="/">
        <Heading as="h1" color="gold" fontSize={{ base: "4xl", md: "8xl" }}>
          Chiamaka & Chinedu
        </Heading>
      </Link>

      <HStack
        spacing={{ base: 2, md: "1rem" }}
        divider={<Divider orientation="vertical" h={{ base: 3, md: 5 }} borderColor="gray.600" />}
      >
        {navLinks.map((link) => (
          <NavLink key={link.id} path={link.path} title={link.name}>
            {link.name}
          </NavLink>
        ))}
      </HStack>
    </Stack>
  )
}

export default Nav
