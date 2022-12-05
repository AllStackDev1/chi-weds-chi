import * as React from "react"

import { Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

export const NavLink = ({
  children,
  path,
  title,
  ...rest
}: {
  children: React.ReactNode
  path: string
  title: string
}) => {
  const { pathname } = useRouter()

  //remove the trailing slash from the pathname
  const pathName = pathname.replace(/\/$/, "")

  const pathIncludes = pathName ? pathName === path : path === "/"

  return (
    <ChakraLink
      href={path}
      passHref
      as={Link}
      _hover={{
        textDecor: "none",
      }}
      _activeLink={{
        color: "gold",
      }}
      color={pathIncludes ? "gold" : "white"}
      fontSize={{ base: "xs", md: "sm" }}
      title={title}
      transitionProperty="color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter"
      transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
      transitionDuration="500ms"
      className="underlined"
      letterSpacing={3}
      textTransform="uppercase"
      {...rest}
    >
      {children}
    </ChakraLink>
  )
}
