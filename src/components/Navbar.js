import React, { useContext } from "react"
import {useNavigate} from "react-router-dom"

import qrIcon from "../assets/icons/qr.svg"
import { appContext } from "../context/appContext"

export const Navbar = () => {
  const navigate = useNavigate()
  const {setUser, user} = useContext(appContext)
  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    navigate('/login')
    setUser(null)
  }

  return (
    <nav className=" border-b p-2 px-4 flex justify-between">
      <div className="flex gap-4 items-center">
        <img className="w-10 h-10 rounded" src={user?.avatar} alt="icon" />
        <span className="w-px h-6 bg-main-gray"></span>
        <h1 className="text-dark font-medium text-3xl">Logo</h1>
      </div>
      <div className="flex gap-2">
        <button onClick={handleLogout} className="bg-red px-4 py-2 text-white rounded flex gap-1">
          Выйти
        </button>
        <button className="bg-primary px-4 py-2 text-white rounded flex gap-1">
          Мой сертификат
          <img src={qrIcon} alt="icon" />
        </button>
      </div>
    </nav>
  )
}
