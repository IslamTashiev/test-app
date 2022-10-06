import React, { useEffect, useState } from "react"

import gunIcon from "../../assets/icons/gun-dark.svg"
import carIcon from "../../assets/icons/car-dark.svg"
import eyeIcon from "../../assets/icons/eye.svg"

export const PermissionItem = (props) => {
  const { permissionState, dateFrom, dateTo, timeFrom, timeTo, name, lastName } = props
  
  const [currentContition, setCurrentContition] = useState(
    "border-yellow bg-light-yello"
  )

  const dateFromEdited = dateFrom.split('-').join('.')
  const dateToEdited = dateTo.split('-').join('.')

  useEffect(() => {
    switch (permissionState) {
      case "verify":
        setCurrentContition("border-yellow bg-light-yello")
        break
      case "success":
        setCurrentContition("border-light-green")
        break
      case "finished":
        setCurrentContition("border-red bg-light-red")
        break
      case "canceled":
        setCurrentContition("border-sub-dark bg-sub-gray")
        break

      default:
        return currentContition
    }
  }, [])

  return (
    <div
      className={`p-4 border-l-4 mb-px flex items-center ${currentContition}`}
    >
      <div className=" text-yellow flex flex-col items-center">
        <h1 className=" font-medium">Проверка</h1>
        <h3 className="">№ 9237</h3>
      </div>
      <div className="flex px-4 gap-4">
        <p className=" text-dark">{timeFrom}</p>
        <span className=" text-sub-dark">до</span>
        <p className=" text-dark">{timeTo}</p>
      </div>
      <div className="flex px-4 gap-4">
        <p className=" text-dark">{dateFromEdited}</p>
        <span className=" text-sub-dark">до</span>
        <p className=" text-dark">{dateToEdited}</p>
      </div>
      <div className="flex px-4 gap-4">
        <img src={gunIcon} alt="icon" />
        <img src={carIcon} alt="icon" />
      </div>
      <div className="flex flex-col items-end px-4">
        <h2 className=" text-dark font-medium">{name}</h2>
        <h2 className=" text-dark font-medium">{lastName}</h2>
      </div>
      <img src={eyeIcon} alt="icon" />
    </div>
  )
}
