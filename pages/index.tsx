import { useEffect } from "react"
import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { Image, useMediaQuery } from "@chakra-ui/react"
import Header from "../app/core/components/Header"
import Headings from "../app/core/components/Headings"
import CTA from "../app/core/components/CTA"
import Registry from "app/core/components/Registry"
import { useScrollSection, Section } from "react-scroll-section"

const Home: BlitzPage = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })
  const focusSection = useScrollSection("focus-section-home")

  useEffect(() => {
    focusSection.onClick()
  }, [focusSection])

  return (
    <Layout title="Home" mainPx={4}>
      <Header
        image={
          isLargerThan768
            ? "https://res.cloudinary.com/allstackdev/image/upload/v1671176475/chineduamaka/231A0042-Edit-short_hzpcgs_rskudr.webp"
            : "https://res.cloudinary.com/allstackdev/image/upload/v1671176648/chineduamaka/231A0042-Edit-1_u6dtid.webp"
        }
      >
        <Image src="/me-&-u.png" alt="Me & You 4ever" />
      </Header>

      <Section id="focus-section-home">
        <Headings standout="BEGINNING OF TRUE LOVE" title="A short timeline of our story" />
      </Section>

      <CTA
        btnTitle="RSVP"
        subtitle=""
        title="Please, take a moment and respond to our invitation."
      />

      <Registry />
    </Layout>
  )
}

export default Home
