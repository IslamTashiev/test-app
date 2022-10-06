import React, { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Logo, RadioSlider, StepOne, StepTwo } from "../components"

const radioItems = [
  { title: "Персональная информация", number: 1 },
  { title: "Детали сертификата", number: 2 },
]

export const Register = () => {
  const [searchParams] = useSearchParams()
  const step = searchParams.get("step")
  const isEditing = searchParams.get("edit")

  const steps = [
    <StepOne isEditing={isEditing === "true"} />,
    <StepTwo isEditing={isEditing === "true"} />,
  ]

  return (
    <div className="mx-auto max-w-3xl mt-8">
      <Logo />
      <div className="flex justify-center gap-12">
        {radioItems.map((item, index) => (
          <RadioSlider
            key={item.number}
            activeItem={step - 1 === index}
            {...item}
          />
        ))}
      </div>
      {steps[step - 1]}
    </div>
  )
}
