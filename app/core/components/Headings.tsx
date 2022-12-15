import React from "react"
import { Box, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"

const Headings = ({ standout, title }: { standout: string; title: string }) => {
  return (
    <Stack
      // color="gold"
      align="center"
      justify="center"
      textAlign="center"
      w={{ md: 125 }}
      mx="auto"
    >
      <Text color="gold">{standout}</Text>
      <Image src="/separator.png" alt="separator" />
      <Heading color="gold" as="h3" fontSize={{ base: "3xl", md: "6xl" }}>
        {title}
      </Heading>
      <VStack fontSize={{ base: "xs", lg: "md" }} lineHeight={{ base: "2", lg: "9" }}>
        <Text>
          Get a bottle of chilled water because it may be a long read but I will try to be concise,
          as this love story we are celebrating has spanned over a decade of friendship, which story
          needs to be told…hehe.
        </Text>
        <Image src="/separator.png" alt="separator" />
        <Text>
          So we cross paths with each other, in Nov 2011, though not in person but in one of “2go”
          social app chat rooms, which was for Nnamdi Azikiwe University students, where we got
          information about the admission process, we were teens and focus on gaining admission and
          furthering our education. We both wanted to go to the same university, and that was what
          brought us together.
        </Text>
        <Image src="/separator.png" alt="separator" />
        <Text>
          We kept in touch, till around 2013 when we went for the school pre-science program, this
          was when we met for the first time, we lived in the same compound - well orchestrated by
          `muwa`, and we became very close friends nothing other than that, though I have fallen in
          love *wink*.
        </Text>
        <Image src="/separator.png" alt="separator" />
        <Text>
          This program will last for 6months, but I had another plan which was to join the Nigeria
          Defence Academy, I had to leave and defer the whole program because I had to go for the
          screening - another period of not seeing each other, which lasted over a year.
        </Text>
        <Image src="/separator.png" alt="separator" />
        <Text>
          In Nov 2014 I popped the question to officially ask her out, and yes, she did not accept
          nor reject the proposal. Now know that this is becoming a long-distance friendship as we
          haven’t seen each other for over a year, and at this period I was finalising my admission
          to a school in Ghana, this is a whole new point - are we going to make it? I haven’t
          started and we are already getting separated a lot more.
        </Text>
        <Image src="/separator.png" alt="separator" />
        <Text>
          But in Dec 2015 we officially started dating and we gave ourselves a chance to work toward
          it. It wasn’t easy, but we overcame all issues and challenges life has thrown at us. We
          understood our difference and similarities, We have grown closer since then.
        </Text>
        <Image src="/separator.png" alt="separator" />
        <Text>
          Fast track to 2022 I ask the love of my life, if she would want to spend the rest of her
          days with me, and it was a said YES!!!
        </Text>
      </VStack>
    </Stack>
  )
}

export default Headings
