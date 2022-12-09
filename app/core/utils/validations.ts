import * as yup from "yup"

export const ReservationSchema = yup.object().shape({
  users: yup.array().of(
    yup.object().shape(
      {
        name: yup.string().required("Name is required"),
        email: yup
          .string()
          .email()
          .when("phone", {
            is: (phone) => !phone,
            then: yup.string().required("Email is required"),
          }),
        phone: yup.string().when("email", {
          is: (email: string) => email === "",
          then: yup.string().required("Phone is required"),
        }),
        meal: yup.string().required("Meal is required"),
      },
      [["email", "phone"]]
    )
  ),
})
