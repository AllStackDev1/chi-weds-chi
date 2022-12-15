import { useEffect } from "react"
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
  useMediaQuery,
  VStack,
} from "@chakra-ui/react"
import { HiLocationMarker, HiPhone } from "react-icons/hi"
import { FaChurch } from "react-icons/fa"
import Layout from "app/core/layouts/Layout"
import Cta from "app/core/components/CTA"
import Registry from "app/core/components/Registry"
import { Section, useScrollSection } from "react-scroll-section"

const Locations = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })
  const focusSection = useScrollSection("focus-section-locations")

  useEffect(() => {
    focusSection.onClick()
  }, [focusSection])

  return (
    <Layout title="Locations" mainPx={4}>
      <Header
        image={
          isLargerThan768
            ? "https://res.cloudinary.com/allstackdev/image/upload/v1671074284/chineduamaka/231A0262-Edit-short_oaayji.webp"
            : "https://res.cloudinary.com/allstackdev/image/upload/v1671072616/chineduamaka/231A0329-Edit_kyxqft.webp"
        }
      >
        <Image src="/rsvp-img-1.png" alt="RSVP" />
      </Header>

      <Section id="focus-section-locations" style={{ width: "100%" }}>
        <Stack spacing={{ base: 8, md: "4rem" }} w={{ md: 130 }} mx="auto">
          <VStack gap={10} w="full" align="start" textAlign={{ md: "center" }}>
            <Stack textAlign="left" spacing={6} minW={{ md: "40%" }}>
              <Heading color="gold" as="h4" fontWeight="normal">
                Church Venue
              </Heading>

              <List textAlign="left">
                <ListItem fontSize={{ md: "lg" }}>
                  <ListIcon as={FaChurch} />
                  Saint Barth’s Anglican Church, <br /> 1 Bishop Awelewa Adebiyi Close, <br />
                  By Finniger Bus Stop, <br />
                  Statllite Town, Ojo, <br />
                  Lagos, Nigeria.
                </ListItem>
              </List>
            </Stack>

            <AspectRatio ratio={16 / 9} marginInlineStart="0 !important" minW="full">
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
          </VStack>

          <VStack gap={10} align="start" textAlign={{ md: "center" }}>
            <Stack textAlign="left" spacing={6} minW={{ md: "40%" }}>
              <Heading color="gold" as="h4" fontWeight="normal">
                Reception Venue
              </Heading>

              <List textAlign="left" spacing={2}>
                <ListItem>
                  <ListIcon as={HiLocationMarker} />
                  Nigerian Navy Air Base, Navy Town, <br />
                  Satellite Town, Ojo, <br />
                  Lagos, Nigeria.
                </ListItem>
              </List>
            </Stack>

            <AspectRatio ratio={16 / 9} marginInlineStart="0 !important" minW="full">
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
          </VStack>

          <Stack spacing={6} minW={{ md: "40%" }}>
            <Heading color="gold" as="h4" fontWeight="normal">
              Contacts
            </Heading>

            <List textAlign="left" spacing={2}>
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
        </Stack>
      </Section>

      <Cta
        btnTitle="RSVP"
        subtitle=""
        title="Please, take a moment and respond to our invitation."
      />

      <Registry />
    </Layout>
  )
}

export default Locations
