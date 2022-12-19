import { Box, Stack, Text } from "@chakra-ui/react"
import FormInput from "app/core/components/Form/FormInput"
import FormSelect from "app/core/components/Form/FormSelect"
import Button from "app/core/components/Button"
import { useFieldArray } from "react-hook-form"
import { useEffect } from "react"

const RsvpForm = ({ control, noOfGuests, isLoading, isSubmitting }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  })

  useEffect(() => {
    // update field array when ticket number changed
    const newVal = noOfGuests
    const oldVal = fields.length
    if (newVal > oldVal) {
      // append tickets to field array
      for (let i = oldVal; i < newVal; i++) {
        append({ name: "", email: "", phoneNumber: "", meals: [] })
      }
    } else {
      // remove tickets from field array
      for (let i = oldVal; i > newVal; i--) {
        remove(i - 1)
      }
    }
  }, [append, fields, fields.length, noOfGuests, remove])

  return (
    <Stack align="center" justify="center" spacing={6} w={{ base: "full", lg: 120 }}>
      <FormSelect
        name="noOfGuests"
        label="Select the number of adult guests coming with you."
        placeholder="Number of guests"
        options={[1, 2, 3, 4]}
      />
      {fields.map((field, i) => {
        const u = i === 0

        return (
          <Stack w="full" spacing={6} key={`${field.id}_${i}`} color="black">
            <Text fontSize={{ md: "lg" }} fontWeight="bold" color="white">
              {` ${u ? "You" : `Your plus ${i}`} `}
            </Text>
            <FormInput
              id={`users.${i}.name`}
              name={`users.${i}.name`}
              placeholder={`${u ? "Your" : `Your plus ${i}`} name`}
            />
            <FormInput
              id={`users.${i}.email`}
              type="email"
              name={`users.${i}.email`}
              placeholder={`${u ? "Your" : `Your plus ${i}`} email`}
            />
            <FormInput
              id={`users.${i}.phone`}
              name={`users.${i}.phone`}
              placeholder={`${u ? "Your" : `Your plus ${i}`} phone number`}
            />
            <FormSelect
              id={`users.${i}.meal`}
              name={`users.${i}.meal`}
              placeholder={`${u ? "Your" : `Your plus ${i}`} meal preferences`}
              options={["Fried Rice", "Jellof Rice", "Egwusi Soup", "Bitter Leaf", "Amala"]}
            />
          </Stack>
        )
      })}

      <Box w={{ base: 32, md: 44 }}>
        <Button
          h={12}
          bg="gold"
          w="full"
          rounded="sm"
          type="submit"
          title="Submit"
          color="primaryBackground"
          _hover={{ bg: "gold" }}
          _focus={{ bg: "gold" }}
          isLoading={isLoading || isSubmitting}
        />
      </Box>
    </Stack>
  )
}

export default RsvpForm
