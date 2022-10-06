import React from "react"

export const RadioSlider = ({ activeItem, number, title }) => {
  return (
    <div className={`radio__elem flex items-center flex-col ${activeItem && 'active'}`}>
      <div className="text-dark w-12 h-12 rounded-full border flex justify-center items-center">
        {number}
      </div>
      <p className="font-normal text-base text-dark">{title}</p>
    </div>
  )
}
