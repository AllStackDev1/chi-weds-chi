import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { Image, Stack } from "@chakra-ui/react"
import Header from "../app/core/components/Header"
import Headings from "../app/core/components/Headings"
import CTA from "../app/core/components/CTA"

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <Header image="/background.jpg" bgPos="0% -270px">
        {/* <Header image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"> */}
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

export default Home
