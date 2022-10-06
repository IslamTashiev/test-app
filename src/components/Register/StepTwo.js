import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "../Input"

import manIcon from "../../assets/icons/man.svg"
import carIcon from "../../assets/icons/car.svg"
import alertIcon from "../../assets/icons/alert.svg"
import plusIcon from "../../assets/icons/plus.svg"
import questionIcon from "../../assets/icons/question.svg"
import saveIcon from "../../assets/icons/save.svg"

export const StepTwo = ({ isEditing }) => {
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")
  const [timeFrom, setTimeFrom] = useState("")
  const [timeTo, setTimeTo] = useState("")
  const [purpose, setPurpose] = useState("")
  const [commit, setCommit] = useState("")
  const [withGun, setWithGun] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [isAgree, setIsAgree] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (confirmed && isAgree) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"))
      const user = JSON.parse(localStorage.getItem(currentUser))
      const data = {
        dateFrom,
        dateTo,
        timeFrom,
        timeTo,
        purpose,
        commit,
        withGun,
        confirmed,
        isAgree,
        name: user.name,
        lastName: user.lastName,
      }
      localStorage.setItem(
        currentUser,
        JSON.stringify({
          ...user,
          visits: [...user.visits, data],
        })
      )

      navigate("/")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white w-full rounded shadow-default mt-8 p-4">
        <div className="flex gap-1 mb-4">
          <div className="p-2 rounded flex justify-center items-center bg-light-blue">
            <img src={manIcon} alt="icon" />
          </div>
          <div className="p-2 rounded flex justify-center items-center relative ">
            <img
              className="absolute top-0 right-0 translate-x-2/4 -translate-y-2/4"
              src={alertIcon}
              alt="icon"
            />
            <img src={carIcon} alt="icon" />
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div className="w-2/4">
            <label className="text-sub-dark">Выберите дату</label>
            <div className="flex w-full gap-8 relative">
              <Input value={dateFrom} changer={setDateFrom} type="date" />
              <span className=" absolute top-2/4 w-4 h-px bg-sub-dark left-2/4 -translate-y-2/4 -translate-x-2/4"></span>
              <Input value={dateTo} changer={setDateTo} type="date" />
            </div>
          </div>
          <div className="w-2/4">
            <label className="text-sub-dark">Выберите время</label>
            <div className="flex w-full gap-8 relative">
              <Input value={timeFrom} changer={setTimeFrom} type="time" />
              <span className=" absolute top-2/4 w-4 h-px bg-sub-dark left-2/4 -translate-y-2/4 -translate-x-2/4"></span>
              <Input value={timeTo} changer={setTimeTo} type="time" />
            </div>
          </div>
        </div>
        <div className="mt-4 mb-6">
          <Input
            value={purpose}
            changer={setPurpose}
            label="Цель визита"
            variant="textarea"
          />
        </div>
        <div className="flex gap-1">
          <Input
            value={withGun}
            changer={setWithGun}
            type="checkbox"
            label="Вход с оружием"
          />
          <img src={alertIcon} alt="icon" />
        </div>
        <div className="w-2/4 mt-4">
          <Input
            value={commit}
            changer={setCommit}
            variant="textarea"
            label="Комментарий"
          />
        </div>
      </div>
      <div className=" cursor-pointer flex items-center justify-center gap-3 py-2 pl-4 pr-6 text-sub-dark border rounded w-full mt-4">
        Добавьте новый вход
        <img src={plusIcon} alt="icon" />
      </div>
      <div className="mt-4">
        <Input
          value={confirmed}
          changer={setConfirmed}
          type="checkbox"
          label="Целостность данных подтверждает"
        />
        <div className="mt-2 flex gap-2">
          <Input
            value={isAgree}
            changer={setIsAgree}
            type="checkbox"
            label="С правилами поведения в селе соглашаются"
          />
          <img src={questionIcon} alt="icon" />
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <div
          onClick={() => navigate(isEditing ? "/" : "/register?step=1")}
          className="px-14 py-2 border rounded text-sub-dark cursor-pointer"
        >
          Вернуться
        </div>
        <button className="bg-green px-10 py-2 text-white rounded flex gap-1">
          Сохранить
          <img src={saveIcon} alt="icon" />
        </button>
      </div>
    </form>
  )
}
