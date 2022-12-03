import Header from "app/core/components/Header"
import {
  AspectRatio,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/react"
import { HiLocationMarker, HiPhone } from "react-icons/hi"
import { FaChurch } from "react-icons/fa"
import Layout from "app/core/layouts/Layout"

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
        <HStack
          align="start"
          textAlign={{ md: "center" }}
          gap={{ base: 10, md: 16 }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Stack spacing={6} minW={{ md: "40%" }}>
            <Heading color="gold" as="h4" fontWeight="normal">
              Church Venue
            </Heading>

            <List textAlign="left" spacing={2}>
              <ListItem>
                <ListIcon as={FaChurch} />
                Saint Berth Anglican Church, 9 Yeside, Abeke St, Animashaun 101241, Lagos, Nigeria
              </ListItem>
              <ListItem>
                <ListIcon as={HiPhone} />
                +234 817 866 5183
              </ListItem>
              <ListItem>
                <ListIcon as={HiPhone} />
                +234 815 620 7926
              </ListItem>
              <ListItem>
                <ListIcon as={HiPhone} />
                +234 901 418 9167
              </ListItem>
            </List>
          </Stack>

          <AspectRatio
            ratio={16 / 9}
            marginInlineStart={"0 !important"}
            minW={{ base: "full", md: "60%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.39561307602!2d3.2253908791015666!3d6.451837899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b889d410ffa91%3A0x9ea37ec58d96ff10!2sSt%20Barth&#39;s%20Anglican%20Church!5e0!3m2!1sen!2sgh!4v1670068718010!5m2!1sen!2sgh"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </AspectRatio>
        </HStack>

        <HStack
          align="start"
          textAlign={{ md: "center" }}
          gap={{ base: 10, md: 16 }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Stack spacing={6} minW={{ md: "40%" }}>
            <Heading color="gold" as="h4" fontWeight="normal">
              Reception Venue
            </Heading>

            <List textAlign="left" spacing={2}>
              <ListItem>
                <ListIcon as={HiLocationMarker} />
                Nigerian Navy Air Base. Navy Town, Satellite Town, Ojo.
              </ListItem>
              <ListItem>
                <ListIcon as={HiPhone} />
                +234 817 866 5183
              </ListItem>
              <ListItem>
                <ListIcon as={HiPhone} />
                +234 815 620 7926
              </ListItem>
              <ListItem>
                <ListIcon as={HiPhone} />
                +234 901 418 9167
              </ListItem>
            </List>
          </Stack>

          <AspectRatio
            ratio={16 / 9}
            marginInlineStart={"0 !important"}
            minW={{ base: "full", md: "60%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7929.292007185575!2d3.2765878!3d6.4394869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b885f218be3db%3A0x5c8ddb90980bdf66!2sNigerian%20Navy%20Air%20Base.!5e0!3m2!1sen!2sgh!4v1670067849179!5m2!1sen!2sgh"
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
    </Layout>
  )
}

export default Locations
