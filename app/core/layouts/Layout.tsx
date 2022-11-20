import Head from "next/head"
import React from "react"
import { BlitzLayout } from "@blitzjs/next"
import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import Nav from "../components/Nav"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <Stack m={{ md: 10 }}>
      <Head>
        <title>{title || "chimaka"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Box as="main" px={{ base: 4, md: 0 }} py={{ base: 6, md: 0 }} minH="100vh">
        {children}
      </Box>

      <Flex as="footer" h={14} align="center" justify="center">
        <Text fontSize="sm" color="gray.500">
          Celebrating our marriage. Chinedu & Amaka 2023.
        </Text>
      </Flex>
    </Stack>
  )
}

export default Layout
