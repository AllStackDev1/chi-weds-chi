import React from "react"
import Layout from "app/core/layouts/Layout"
import Header from "../app/core/components/Header"
import { Heading, Image, Stack, Text } from "@chakra-ui/react"
import Headings from "../app/core/components/Headings"
import CTA from "../app/core/components/CTA"

const Invitation = () => {
  return (
    <Layout>
      <Header image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
        <Image src="/invitation-img-2.png" alt="invitation" />
      </Header>

      <Stack
        py={{ base: 16, md: "10rem" }}
        spacing={{ base: 8, md: "3rem" }}
        align="center"
        justify="center"
      >
        <Headings
          standout="SAVE THE DATE"
          title="Celebrate love with us"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi
            dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud."
        />

        <Stack textAlign="center" fontFamily="heading" fontSize="xl" spacing={0}>
          <Text>September 20, 2020. – 4pm</Text>
          <Text>Vineyard at Pier 26, Hudson river</Text>
        </Stack>

        <Text w={{ md: 80 }} color="gray.500" textAlign="center">
          Please, be here on time. Wedding starts at 4pm, celebration dinner starts at 5pm.
        </Text>
      </Stack>

      <CTA
        btnTitle="RSVP"
        subtitle="LINE WILL BE OPEN UNTIL SEPTEMBER 1ST"
        title="Please, take a moment and respond to our invitation."
      />
    </Layout>
  )
}

export default Invitation
