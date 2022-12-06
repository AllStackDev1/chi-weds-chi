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

  return (
    <Stack
      align="center"
      justify="center"
      textAlign="center"
      // pos={{ md: "absolute" }}
      top={scrollPosition > 300 ? 0 : 14}
      insetX={10}
      spacing={{ base: 4, md: scrollPosition > 300 ? 4 : 10 }}
      as="nav"
      py={{ base: 4, md: scrollPosition > 300 ? 4 : 0 }}
      pos={scrollPosition > 300 ? "fixed" : "absolute"}
      zIndex={100}
      bg={scrollPosition > 300 ? "#3e1021" : "transparent"}
      transition="all 0.3s ease-in-out"
    >
      <Heading
        color="gold"
        as="h1"
        fontSize={{ base: "4xl", md: scrollPosition > 300 ? "5xl" : "8xl" }}
      >
        Chiamaka & Chinedu
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
