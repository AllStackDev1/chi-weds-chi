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
          So we crossed paths with each other, when we were seeking admission to the same
          university, and that was what brought us together. We went for the school pre-science
          program, we stayed in the same compound and attended the same fellowship and we became
          very close friends, nothing other than that, though I have fallen in 😍😉. I left the
          program because I got accepted to come for a screening at the Nigeria Defence Academy.
        </Text>
        <Image src="/separator.png" alt="separator" />
        <Text>
          Fast forward to a year later, I officially asked her out, and yes, she did not accept nor
          reject the proposal. This is now becoming a long-distance friendship as we haven’t seen
          each other for over a year, and at this period I was also finalising my admission to a
          school in Ghana, this is a whole new point - are we going to make it? We haven’t started
          and we are already getting separated a lot more.
        </Text>
        <Image src="/separator.png" alt="separator" />
        <Text>
          Fast forward to a year later, I got a yes and gave ourselves a chance to work toward it.
          It wasn’t easy, but we overcame all issues and challenges life has thrown at us. We
          understood our differences and similarities, We have grown closer with ourselves and to
          God who is our foundation.
        </Text>
        <Image src="/separator.png" alt="separator" />
        <Text>
          Fast track to 2022 I ask the love of my life, if she would want to spend the rest of her
          days with me, and it was a YES!!!
        </Text>
      </VStack>
    </Stack>
  )
}

export default Headings
