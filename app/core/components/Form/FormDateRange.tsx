import { useEffect, useRef, useState } from "react"
import { DateRange } from "react-date-range"

import format from "date-fns/format"
import { addDays } from "date-fns"

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { Input } from "@chakra-ui/input"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Controller, useFormContext } from "react-hook-form"

const FormDateRange = ({ label, name, ...props }) => {
  const { control } = useFormContext()

  // date state
  const [range] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ])

  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle
  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false)
    }
  }

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    let ref = refOne.current as unknown as HTMLElement
    if (refOne.current && !ref.contains(e.target)) {
      setOpen(false)
    }
  }

  return (
    <FormControl className="calendarWrap">
      {label && <FormLabel fontSize="sm">{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ref } }) => {
          const handleSelectChange = (selectedOption: any) => {
            //merge start and end date
            const merged = {
              ...selectedOption.selection,
              startDate: format(selectedOption.startDate, "yyyy-MM-dd"),
              endDate: format(selectedOption.endDate, "yyyy-MM-dd"),
            }
            // merge dates in one string
            const mergedString = `${merged.startDate} - ${merged.endDate}`
            // set the value
            return onChange(mergedString)
          }

          return (
            <>
              <Input
                ref={ref}
                w="full"
                rounded="none"
                borderColor="darkBlue"
                height={14}
                bg="white"
                _placeholder={{ fontSize: "md" }}
                _hover={{ borderColor: "darkBlue", shadow: "none" }}
                _focus={{ borderColor: "darkBlue", shadow: "none" }}
                value={value}
                readOnly
                className="inputBox"
                onClick={() => setOpen((open) => !open)}
                {...props}
              />
              <div ref={refOne}>
                {open && (
                  <DateRange
                    onChange={(item) => handleSelectChange(item.selection)}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    months={1}
                    direction="horizontal"
                    className="calendarElement"
                  />
                )}
              </div>
            </>
          )
        }}
      />
    </FormControl>
  )
}

export default FormDateRange
