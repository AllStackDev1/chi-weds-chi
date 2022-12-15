import { ReactNode } from "react"
import Head from "next/head"
import { BlitzLayout } from "@blitzjs/next"
import { FiChevronsUp } from "react-icons/fi"
import ScrollToTop from "react-scroll-up"
import { Box, Flex, Icon, IconButton, Stack, Text } from "@chakra-ui/react"
import Nav from "../components/Nav"
import { useRouter } from "next/router"

const Layout: BlitzLayout<{ title?: string; mainPx?: number; children?: ReactNode }> = ({
  title,
  mainPx,
  children,
}) => {
  const { pathname } = useRouter()
  const url = "https://www.chineduamaka.rsvp"
  const _title = `CHINEDUAMAKA ❤️ | ${title?.toUpperCase()}`
  const description =
    "Join us as we move our friendship to forever in love ❤️. Yes! we are getting married..."
  const imageUrl =
    "https://res.cloudinary.com/allstackdev/image/upload/v1671103699/chineduamaka/social-image_lvfkyi.jpg"

  return (
    <Stack m={{ md: 10 }} pos="relative" overflowX="hidden">
      <Head>
        <title>{_title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={_title} />
        <meta name="description" content="description" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={_title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={_title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
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

        {pathname !== "/invitation" ? (
          <Box
            w="full"
            h={{ base: 80, lg: 130 }}
            bgPos="center"
            bgSize="cover"
            bgImage="https://res.cloudinary.com/allstackdev/image/upload/v1671076549/chineduamaka/thank-you_rfonzk.webp"
            bgRepeat="no-repeat"
          />
        ) : null}
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
