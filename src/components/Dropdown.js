import React, { useState } from "react"

export const Dropdown = ({ options, activeItem ,setActiveItem }) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="rounded border border-main-gary p-2 flex items-center justify-between cursor-pointer w-full relative"
      >
        <svg
          className={showDropdown && "rotate-180 transition-all"}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="#929BAA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="font-normal text-dark">{options[activeItem].title}</p>
        <div
          className={`absolute w-full h-auto bg-white top-12 left-0 rounded shadow-md ${!showDropdown ? "hidden" : ''}`}
        >
          {options.map((item, index) => (
            <p key={item.title} onClick={() => setActiveItem(index)} className="pl-4 py-2 text-dark hover:bg-rare-gray">
              {item.title}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}
