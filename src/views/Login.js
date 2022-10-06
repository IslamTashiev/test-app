import emailjs from "@emailjs/browser"
import { useNavigate } from "react-router-dom"
import React, { useContext, useRef, useState } from "react"
import { Input, Loader, Logo } from "../components"
import { appContext } from "../context/appContext"

export const Login = () => {
  const form = useRef()
  const [email, setEmail] = useState("")
  const [isEmail, setIsEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { code, setUser } = useContext(appContext)

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)
  const sendEmail = (e) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setIsEmail("Введите корректный email")
      return
    }
    const userData = {
      email,
      name: null,
      avatar: null,
      id: null,
      phoneNumber: null,
      registered: false,
      lastName: null,
      visits: []
    }
    const user = JSON.parse(localStorage.getItem(email))
    localStorage.setItem("currentUser", JSON.stringify(email))
    if (!user) {
      localStorage.setItem(email, JSON.stringify(userData))
      setUser(userData)
    } else {
      setUser(user)
    }

    setLoading(true)
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false)
        navigate("/confirm")
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-96 pb-36">
        <Logo />
        <h1 className="text-3xl font-medium text-dark mb-3">Войти</h1>
        <p className="font-normal text-sm text-sub-dark mb-4">
          Для того чтобы идентифицировать себя в системе, нужно ввести номер
          своего мобильного телефона
        </p>
        <form ref={form} onSubmit={sendEmail} className="mt-8">
          <input
            className="hidden"
            onChange={() => {}}
            value={code}
            name="code"
          />
          <Input
            placeholder="example@gmail.com"
            label="Email:"
            changer={setEmail}
            value={email}
            name="user_email"
          />
          {isEmail && <p className="text-red text-xs">{isEmail}</p>}
          <div className="flex justify-between mt-8">
            <div className="px-9 py-2 text-primary cursor-pointer">
              Забыли пароль
            </div>
            <button className="bg-primary px-10 py-2 text-white rounded flex gap-6 items-center">
              {loading && "Загрузка"}
              {loading && <Loader />}
              {!loading && "Подать заявку"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
