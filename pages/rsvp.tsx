import Header from "app/core/components/Header"
import { Heading, Icon, Image, Stack, Text, useToast } from "@chakra-ui/react"
import { useMutation } from "@blitzjs/rpc"
import Layout from "app/core/layouts/Layout"
import useForm from "app/core/hooks/useForm"
import CTA from "app/core/components/CTA"
import createReservation from "app/reservations/mutations/createReservation"
import { BsX } from "react-icons/bs"
import RsvpForm from "app/core/components/RSVPForm"

const Rsvp = () => {
  const [updateUserOrderMutation] = useMutation(createReservation)
  const toast = useToast()

  const onSubmit = async (values) => {
    try {
      const data = values?.rsvp
      const rsvp = data?.filter((_, index) => index !== 0)
      await updateUserOrderMutation(rsvp)
      toast({
        title: "Successfully RSVP'd",
        duration: 3000,
        status: "success",
        isClosable: false,
        position: "bottom",
        icon: <Icon as={BsX} bg="white" w={4} h={4} rounded="full" color="green.800" mt={1} />,
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
    } catch (error: any) {
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

  const { control, renderForm, watchForm } = useForm({
    onSubmit,
    defaultValues: {
      noOfGuests: 1,
      rsvp: [
        {
          name: "",
          email: "",
          phone: "",
          meals: [],
        },
      ],
    },
  })

  const watchNoOfGuests = watchForm("noOfGuests")
  const parsedNoOfGuests = parseInt(watchNoOfGuests)
  const watchRSVP = watchForm("rsvp")

  return (
    <Layout title="RSVP">
      <Header image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
        <Image src="/rsvp-img-1.png" alt="RSVP" />
      </Header>

      <Stack py={{ base: 16, md: "7rem" }} spacing={{ base: 8, md: "4rem" }}>
        <Stack align="center" justify="center" w={{ md: 125 }} mx="auto" textAlign="center">
          <Text color="gold">MAGICAL MOMENTS</Text>
          <Heading as="h3" color="gold" fontSize={{ base: "2xl", md: "4xl" }}>
            Will you attend to our special day?
          </Heading>
          <Image src="/separator.png" alt="separator" />
          <Text>
            We are so excited to celebrate our wedding with you. Please fill out the form below to
            help us plan for the big day. We can&apos;t wait to see you!
          </Text>
        </Stack>

        <Stack>{renderForm(<RsvpForm control={control} noOfGuests={parsedNoOfGuests} />)}</Stack>
      </Stack>

      <CTA subtitle="HOPE TO SEE YOU" title="Thank you for responding!" />
    </Layout>
  )
}

export default Rsvp
