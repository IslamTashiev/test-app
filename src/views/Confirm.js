import React, { useContext, useState } from "react"
import PinInput from "react-pin-input"
import { useNavigate } from "react-router-dom"
import { Logo } from "../components"
import { appContext } from "../context/appContext"

export const Confirm = () => {
  const [state, setState] = useState("")
  const [error, setError] = useState('')
  const { code, user: userFromStorage } = useContext(appContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const { registered } = JSON.parse(
      localStorage.getItem(userFromStorage?.email)
    )

    if (!registered) {
      return navigate("/register?step=1")
    }

    if (state === code + "") {
      console.log("Верификация пройдена успешно!")
      navigate('/')
    } else {
      setError('Вы ввели не правильное значение!')
      console.log("На ваше электронное письмо отправляется одноразовый код.")
    }
  }
  const handleClickCancel = () => {
    localStorage.removeItem('currentUser')
    navigate("/login")
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-96 pb-36">
        <Logo />
        <h1 className="text-3xl font-medium text-dark mb-3">
          Андрій Андрійович
        </h1>
        <p className="font-normal text-sm text-sub-dark mb-4">
          На ваше электронное письмо отправляется одноразовый код.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-8">
            <label className="text-sub-dark mb-3">Код подтверждения</label>
            <div className="pin-input">
              <PinInput length={5} onChange={(value) => setState(value)} />
              {new Array(4).fill(4).map((_, index) => (
                <span
                  style={{
                    position: "absolute",
                    width: 10,
                    height: 2,
                    background: "#929BAA",
                    zIndex: -1,
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: 42.9 * (index + 1) * 2 - 28,
                  }}
                  key={index}
                ></span>
              ))}
            </div>
            {error && <p className="text-red text-xs mt-3">{error}</p>}
          </div>
          <div className="flex justify-between">
            <div
              onClick={handleClickCancel}
              className="px-14 py-2 text-green border rounded cursor-pointer"
            >
              Отменить
            </div>
            <button
              type="submit"
              className="bg-green px-10 py-2 text-white rounded"
            >
              Подтвердить
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
