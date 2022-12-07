import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { Image, Stack } from "@chakra-ui/react"
import Header from "../app/core/components/Header"
import Headings from "../app/core/components/Headings"
import CTA from "../app/core/components/CTA"

const Gallery: BlitzPage = () => {
  return (
    <Layout title="Gallery">
      <Header image="/background.jpg">
        <Image src="/slider-2.png" alt="slider" />
      </Header>

      <Stack py={{ base: 16, md: "10rem" }} spacing={{ base: 8, md: "12rem" }}>
        <Headings
          standout="BEGINNING OF TRUE LOVE"
          title="A short timeline of our story"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi
            dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud."
        />
      </Stack>

      <CTA
        btnTitle="RSVP"
        subtitle=""
        title="Please, take a moment and respond to our invitation."
      />
    </Layout>
  )
}

export default Gallery
