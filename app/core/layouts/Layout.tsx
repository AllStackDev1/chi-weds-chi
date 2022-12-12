import { ReactNode } from "react"
import Head from "next/head"
import { BlitzLayout } from "@blitzjs/next"
import { FiChevronsUp } from "react-icons/fi"
import ScrollToTop from "react-scroll-up"
import { Flex, Icon, IconButton, Stack, Text } from "@chakra-ui/react"
import Nav from "../components/Nav"

const Layout: BlitzLayout<{ title?: string; mainPx?: number; children?: ReactNode }> = ({
  title,
  mainPx,
  children,
}) => {
  return (
    <Stack m={{ md: 10 }} pos="relative" overflowX="hidden">
      <Head>
        <title>{`chineduamaka ❤️ | ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Stack
        as="main"
        minH="100vh"
        px={{ base: mainPx, md: 0 }}
        spacing={{ base: 12, md: "12rem" }}
        align="center"
      >
        {children}
      </Stack>

      {/* @ts-expect-error */}
      <ScrollToTop showUnder={300}>
        <IconButton
          w={14}
          h={14}
          color="gold"
          rounded="full"
          shadow="md"
          bg="primaryBackground"
          aria-label="Back to top button"
          icon={<Icon as={FiChevronsUp} boxSize={8} />}
        />
      </ScrollToTop>
      <Flex as="footer" h={14} align="center" justify="center">
        <Text fontSize="sm">Celebrating our marriage. chineduamaka ❤️ 2023.</Text>
      </Flex>
    </Stack>
  )
}

export default Layout
