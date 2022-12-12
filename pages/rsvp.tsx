import { useEffect } from "react"
import Header from "app/core/components/Header"
import { Box, Flex, Heading, Icon, Image, Stack, Text, useToast } from "@chakra-ui/react"
import { useMutation } from "@blitzjs/rpc"
import Layout from "app/core/layouts/Layout"
import useForm from "app/core/hooks/useForm"
import CTA from "app/core/components/CTA"
import createReservation from "app/reservations/mutations/createReservation"
import { BsX } from "react-icons/bs"
import RsvpForm from "app/core/components/RSVPForm"
import { ReservationSchema } from "../app/core/utils/validations"
import { Section, useScrollSection } from "react-scroll-section"
import Registry from "app/core/components/Registry"

const Rsvp = () => {
  const focusSection = useScrollSection("focus-section-rsvp")

  useEffect(() => {
    focusSection.onClick()
  }, [focusSection])

  const [createUserOrderMutation, { status, isLoading }] = useMutation(createReservation)
  const toast = useToast()

  const onSubmit = async (values) => {
    try {
      await createUserOrderMutation(values)
      resetForm()
    } catch (error: any) {
      console.log("error", error)
      toast({
        title: error?.response?.data,
        duration: 3000,
        status: "error",
        isClosable: false,
        position: "bottom",
        icon: <Icon as={BsX} bg="white" w={4} h={4} rounded="full" color="red.800" mt={1} />,
        variant: "solid",
        containerStyle: {
          backgroundColor: "black",
          fontSize: "sm",
          fontFamily: "mono",
          color: "brand.800",
          rounded: "md",
          width: 85,
          minWidth: 85,
          maxWidth: 85,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 99999999999999999,
          textAlign: "center",
        },
      })
    }
  }

  const {
    control,
    renderForm,
    watchForm,
    resetForm,
    formState: { isSubmitting },
  } = useForm({
    schema: ReservationSchema,
    onSubmit,
    defaultValues: {
      noOfGuests: 1,
      users: [
        {
          name: "",
          email: "",
          phone: "",
          meal: "",
        },
      ],
    },
  })

  const watchNoOfGuests = watchForm("noOfGuests")
  const parsedNoOfGuests = parseInt(watchNoOfGuests)

  return (
    <Layout title="RSVP" mainPx={4}>
      <Header image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
        <Image src="/rsvp-img-1.png" alt="RSVP" />
      </Header>

      {status === "success" ? (
        <CTA subtitle="HOPE TO SEE YOU" title="Thank you for responding!" />
      ) : (
        <Section id="focus-section-rsvp">
          <Stack align="center" justify="center" w={{ md: 125 }} mx="auto" textAlign="center">
            <Heading as="h3" color="gold" w={{ md: "80%" }} fontSize={{ base: "2xl", md: "4xl" }}>
              We are so excited to celebrate our wedding with you.
            </Heading>
            <Image src="/separator.png" alt="separator" />
          </Stack>

          <Flex align="center" justify="center">
            {renderForm(
              <RsvpForm
                control={control}
                noOfGuests={parsedNoOfGuests}
                isLoading={isLoading}
                isSubmitting={isSubmitting}
              />
            )}
          </Flex>
        </Section>
      )}

      <CTA
        btnTitle="RSVP"
        subtitle=""
        title="Please, take a moment and respond to our invitation."
      />

      <Registry />
    </Layout>
  )
}

export default Rsvp
