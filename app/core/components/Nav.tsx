import React from "react"
import { Divider, Heading, HStack, Stack } from "@chakra-ui/react"
import { NavLink } from "./NavLink"
import { useScrollPosition } from "../hooks/useScrollPosition"

export const navLinks = [
  { id: 1, name: "Home", path: "/" },
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
]

const Nav = () => {
  const scrollPosition = useScrollPosition()

  console.log("scrollPosition", scrollPosition)

  return (
    <Stack
      align="center"
      justify="center"
      textAlign="center"
      pos={{ md: "absolute" }}
      top={14}
      insetX={10}
      spacing={{ base: 4, md: 10 }}
      as="nav"
      py={{ base: 4, md: 0 }}
    >
      <Heading as="h1" fontSize={{ base: "4xl", md: "8xl" }}>
        Amaka & Chinedu
      </Heading>
      <HStack
        spacing={{ base: 3, md: "1rem" }}
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
