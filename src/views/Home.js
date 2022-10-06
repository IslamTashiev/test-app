import React, { useContext, useEffect } from "react"
import {useNavigate} from "react-router-dom"
import { Navbar, PermissionList } from "../components"

import phoneIcon from "../assets/icons/phone.svg"
import carIcon from "../assets/icons/car.svg"
import gunIcon from "../assets/icons/gun.svg"
import passwordIcon from "../assets/icons/password.svg"
import editIcon from "../assets/icons/edit.svg"
import newPerIcon from "../assets/icons/new-permission.svg"
import filterIcon from "../assets/icons/filter.svg"
import { appContext } from "../context/appContext"

export const Home = () => {
  const { user, getUser } = useContext(appContext)

  const navigate = useNavigate()

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-3xl ">
        <div className="bg-white w-full rounded shadow-default mt-8  flex justify-between">
          <div className="flex gap-4 m-4">
            <img className=" w-24 h-24 rounded" src={user?.avatar} alt="user" />
            <div>
              <h1 className="font-medium text-2xl text-dark">
                {user?.name} {user?.lastName}
              </h1>
              <div className="flex gap-2 mt-1">
                <img src={passwordIcon} alt="user" />
                <p className="text-dark">{user?.id}</p>
              </div>
              <div className="flex gap-2 mt-2">
                <img src={phoneIcon} alt="user" />
                <p className="text-dark">{user?.phoneNumber}</p>
              </div>
            </div>
          </div>
          <div className=" w-56 bg-rare-gray relative">
            <div className="flex gap-4 my-6 ml-6">
              <img src={carIcon} alt="user" />
              <p className="text-dark">{user?.carNumber}</p>
            </div>
            <div className="flex gap-2 ml-6">
              <img src={gunIcon} alt="user" />
              <p className="text-dark">{user?.gunType}</p>
            </div>
            <div onClick={() => navigate('/register?step=1&edit=true')} className=" absolute w-10 bg-sub-gray h-full top-0 right-0 rounded-r flex items-center justify-center cursor-pointer">
              <img src={editIcon} alt="edit" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <h1 className=" text-dark font-medium text-2xl">
            Разрешение на въезд
          </h1>
          <div className="flex gap-2">
            <button className="bg-sub-gray p-2 rounded">
              <img src={filterIcon} alt="filterIcon" />
            </button>
            <button onClick={() => navigate('/register?step=2&edit=true')} className="bg-primary px-4 py-2 text-white rounded flex gap-1">
              Новое разрешение
              <img src={newPerIcon} alt="icon" />
            </button>
          </div>
        </div>
        <PermissionList />
      </div>
    </div>
  )
}
