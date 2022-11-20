import React from "react"
import Header from "app/core/components/Header"
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react"
import Layout from "app/core/layouts/Layout"
import useForm from "app/core/hooks/useForm"
import FormInput from "app/core/components/Form/FormInput"
import FormCheckboxes from "app/core/components/Form/FormCheckboxes"
import FormSelect from "app/core/components/Form/FormSelect"
import FormTextarea from "app/core/components/Form/FormTextarea"
import Button from "app/core/components/Button"
import CTA from "../app/core/components/CTA"

const Rsvp = () => {
  const { renderForm } = useForm()

  const rsvpForm = () => {
    return renderForm(
      <Stack spacing={6} align="center" justify="center" w={{ md: 120 }} mx="auto">
        <FormInput name="name" placeholder="Your name" />
        <FormInput tyoe="email" name="email" placeholder="Your email" />
        <FormCheckboxes
          name="available"
          options={["I will be there", "Sorry, I can't come"]}
          oneValueOnly={true}
          showDivider={false}
        />
        <FormSelect name="noOfGuests" placeholder="Number of guests" options={[1, 2, 3, 4, 5]} />
        <FormSelect name="meal" placeholder="Meal preferences" options={["Meat", "Vegetables"]} />
        <FormTextarea name="message" placeholder="Message" />
        <Box w={{ md: 40 }}>
          <Button
            type="submit"
            title="Submit"
            rounded="sm"
            bg="black"
            color="white"
            _hover={{ bg: "black" }}
            _focus={{ bg: "black" }}
            w="full"
            h={12}
          />
        </Box>
      </Stack>
    )
  }
  return (
    <Layout title="RSVP">
      <Header image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
        <Image src="/rsvp-img-1.png" alt="RSVP" />
      </Header>

      <Stack py={{ base: 16, md: "7rem" }} spacing={{ base: 8, md: "4rem" }}>
        <Stack align="center" justify="center" w={{ md: 125 }} mx="auto" textAlign="center">
          <Text>MAGICAL MOMENTS</Text>
          <Heading as="h3" fontSize={{ base: "2xl", md: "4xl" }}>
            Will you attend to our special day?
          </Heading>
          <Image src="/separator.png" alt="separator" />
          <Text color="gray.500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi
            dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud.
          </Text>
        </Stack>

        <Stack>{rsvpForm()}</Stack>
      </Stack>

      <CTA subtitle="HOPE TO SEE YOU" title="Thank you for responding!" />
    </Layout>
  )
}

export default Rsvp
