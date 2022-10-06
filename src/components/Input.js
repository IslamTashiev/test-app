import React from "react"

export const Input = (props) => {
  const { label, placeholder, type, variant, changer, value, name } = props
  
  if (type === "checkbox")
    return (
      <label className="flex gap-1 items-center cursor-pointer">
        <input
          defaultChecked={value}
          onChange={() => changer(!value)}
          className="hidden"
          type="checkbox"
        />
        <div
          className={`w-4 h-4 rounded border bg-cover ${
            value && "bg-checkbox-img border-transparent"
          }`}
        ></div>
        <p className=" text-dark">{label}</p>
      </label>
    )

  if (variant === "textarea")
    return (
      <div className="flex flex-col w-full">
        <label className="text-sub-dark">{label}</label>
        <textarea
          className="p-2 resize-none h-16 flex justify-end border rounded focus:outline-none focus:border-green transition bg-transparent"
          placeholder={placeholder}
          onChange={(e) => changer(e.target.value)}
          required
        ></textarea>
      </div>
    )

  return (
    <div className="flex flex-col w-full">
      <label className="text-sub-dark">{label}</label>
      <input
        className="p-2 flex justify-end border rounded focus:outline-none focus:border-green transition bg-transparent"
        type={type ? type : "email"}
        placeholder={placeholder}
        required
        value={value}
        onChange={(e) => changer(e.target.value)}
        name={name}
      />
    </div>
  )
}
