import React from "react"
import Header from "app/core/components/Header"
import {
  AspectRatio,
  Heading,
  HStack,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/react"
import { HiLocationMarker, HiPhone } from "react-icons/hi"
import CTA from "app/core/components/CTA"
import Layout from "app/core/layouts/Layout"
import Headings from "../app/core/components/Headings"
import { MdEmail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"

const Locations = () => {
  return (
    <Layout title="Locations">
      <Header image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
        <Image src="/rsvp-img-1.png" alt="RSVP" />
      </Header>

      <Stack
        py={{ base: 16, md: "10rem" }}
        spacing={{ base: 8, md: "4rem" }}
        w={{ md: 130 }}
        mx="auto"
      >
        <Headings
          standout="MAGICAL MOMENTS"
          title="We are in love with this place"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi
            dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud."
        />

        <HStack align="start" textAlign={{ md: "center" }} gap={{ base: 10, md: 16 }}>
          <Stack spacing={6} minW={{ md: "40%" }}>
            <Heading as="h4" fontWeight="normal">
              Location & Informations
            </Heading>

            <List textAlign="left" spacing={2}>
              <ListItem>
                <ListIcon as={HiLocationMarker} />
                Vineyard at Pier 26, Hudson river park
              </ListItem>
              <ListItem>
                <ListIcon as={HiPhone} />+ 00 123 456 7
              </ListItem>
              <ListItem>
                <ListIcon as={MdEmail} />
                bridge@example.com
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillInstagram} />
                #janeandarthurwedding
              </ListItem>
            </List>
          </Stack>

          <AspectRatio ratio={16 / 9} minW={{ md: "60%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.779965794229!2d-0.38602368467462295!3d5.744788333317652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84f82fb6def1875b!2zNcKwNDQnNDEuMiJOIDDCsDIzJzAxLjgiVw!5e0!3m2!1sen!2sgh!4v1667042249901!5m2!1sen!2sgh"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </AspectRatio>
        </HStack>
      </Stack>

      <CTA subtitle="HOPE TO SEE YOU" title="Thank you for responding!" />
    </Layout>
  )
}

export default Locations
