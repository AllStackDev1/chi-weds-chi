import Header from "app/core/components/Header"
import { Box, Heading, Icon, Image, Stack, Text, useToast } from "@chakra-ui/react"
import { useMutation } from "@blitzjs/rpc"
import Layout from "app/core/layouts/Layout"
import useForm from "app/core/hooks/useForm"
import FormInput from "app/core/components/Form/FormInput"
import FormSelect from "app/core/components/Form/FormSelect"
import Button from "app/core/components/Button"
import CTA from "app/core/components/CTA"
import { useFieldArray } from "react-hook-form"
import { useEffect } from "react"
import createReservation from "app/reservations/mutations/createReservation"
import { BsX } from "react-icons/bs"

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
      noOfGuests: "1",
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

  console.log("watchRSVP", watchRSVP)

  const { fields, append, remove } = useFieldArray({
    control,
    name: "rsvp",
  })

  useEffect(() => {
    // update field array when ticket number changed
    const newVal = parsedNoOfGuests
    const oldVal = fields.length
    if (newVal > oldVal) {
      // append tickets to field array
      for (let i = 0; i < newVal; i++) {
        append({ name: "", email: "", phoneNumber: "", meals: [] })
      }
    } else {
      // remove tickets from field array
      for (let i = oldVal; i > newVal; i--) {
        remove(i - 1)
      }
    }
  }, [append, fields, fields.length, parsedNoOfGuests, remove])

  const rsvpForm = () => {
    return renderForm(
      <Stack spacing={6} align="center" justify="center" w={{ md: 120 }} mx="auto">
        <FormSelect name="noOfGuests" placeholder="Number of guests" options={[1, 2, 3, 4]} />
        {fields.map((field, index) => {
          const id = index + 1

          return (
            <Stack spacing={6} key={index} color="black">
              <Text fontSize={{ md: "lg" }} fontWeight="bold" color="white">
                Person {id}
              </Text>
              <FormInput
                id={`rsvp.[${id}].name`}
                name={`rsvp.[${id}].name`}
                placeholder="Your name"
              />
              <FormInput
                id={`rsvp.[${id}].email`}
                type="email"
                name={`rsvp.[${id}].email`}
                placeholder="Your email"
              />
              <FormInput
                id={`rsvp.[${id}].phone`}
                name={`rsvp.[${id}].phone`}
                placeholder="Your phone number"
              />
              <FormSelect
                id={`rsvp.[${id}].meals`}
                name={`rsvp.[${id}].meals`}
                placeholder="Meal preferences"
                options={["Meat", "Vegetables"]}
                isMulti
              />
            </Stack>
          )
        })}

        <Box w={{ base: 32, md: 44 }}>
          <Button
            type="submit"
            title="Submit"
            rounded="sm"
            bg="gold"
            color="primaryBackground"
            _hover={{ bg: "gold" }}
            _focus={{ bg: "gold" }}
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
          <Text color="gold">MAGICAL MOMENTS</Text>
          <Heading as="h3" color="gold" fontSize={{ base: "2xl", md: "4xl" }}>
            Will you attend to our special day?
          </Heading>
          <Image src="/separator.png" alt="separator" />
          <Text>
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
