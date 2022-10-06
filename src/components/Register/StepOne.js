import React, { useContext, useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import { Dropdown } from "../Dropdown"
import { Input } from "../Input"
import photoIcon from "../../assets/icons/photo.svg"
import gunIcon from "../../assets/icons/gun.svg"
import carIcon from "../../assets/icons/car.svg"
import arrowRIcon from "../../assets/icons/arrow-r.svg"
import arrowLIcon from "../../assets/icons/arrow-l.svg"
import { appContext } from "../../context/appContext"

const dropdownOptions = [
  { title: "Нет", id: 1 },
  { title: "Частная", id: 2 },
  { title: "Государственная", id: 3 },
]

export const StepOne = ({ isEditing }) => {
  const [dropDownactiveItem, setDropDownActiveItem] = useState(0)
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [id, setId] = useState("")
  const [carNumber, setCarNumber] = useState("")
  const [avatar, setAvatar] = useState("")
  const { user: currentUser } = useContext(appContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isEditing) {
      setName(currentUser?.name)
      setLastName(currentUser?.lastName)
      setPhoneNumber(currentUser?.phoneNumber)
      setId(currentUser?.id)
      setCarNumber(currentUser?.carNumber)
      setAvatar(currentUser?.avatar)
    }
  }, [])



  const handleChange = (e) => {
    const files = e.target.files;
    createImage(files[0]);
  };
  const createImage = (file) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      setAvatar(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem(currentUser.email))
    localStorage.setItem(
      currentUser.email,
      JSON.stringify({
        ...user,
        name,
        lastName,
        id,
        phoneNumber,
        carNumber,
        registered: true,
        avatar,
        gunType: dropdownOptions[dropDownactiveItem].title,
      })
    )
    if (isEditing) {
      return navigate('/')
    }
    navigate('/register?step=2')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white w-full rounded shadow-default mt-8">
        <div className="flex gap-4 justify-between p-4">
          <div className="w-2/4 flex flex-col justify-between">
            <Input changer={setName} value={name} type="text" label="Имя" />
            <Input
              changer={setId}
              value={id}
              type="text"
              label="Номер удостоверения личности"
            />
          </div>
          <div className="w-2/4 flex flex-col justify-between">
            <Input
              changer={setLastName}
              value={lastName}
              type="text"
              label="Фамилия"
            />
            <Input
              changer={setPhoneNumber}
              value={phoneNumber}
              type="text"
              label="Номер мобильного телефона"
            />
          </div>
           <label className="w-36 h-full border-dashed border-2 rounded relative border-sub-dark p-4 flex flex-col items-center cursor-pointer">
            <img src={photoIcon} alt="icon" />
            <h4 className="text-center text-sub-dark font-medium ">
              Загрузить изображение
            </h4>
            {avatar && <img className="top-0 h-full bg-contain rounded absolute" src={avatar} alt='avatar' />}
            <p className="text-center text-main-gray font-normal">
              Максимальный размер файла Это 20mb
            </p>
            <input onChange={handleChange} className="hidden" type="file" />
          </label>
        </div>
        <div className="bg-rare-gray px-4 rounded-b flex justify-between">
          <div className="flex items-center gap-4 w-2/4">
            <Dropdown
              options={dropdownOptions}
              activeItem={dropDownactiveItem}
              setActiveItem={setDropDownActiveItem}
            />
            <img src={gunIcon} alt="icon" />
          </div>
          <div className="w-px h-20 bg-sub-gray mx-4"></div>
          <div className="flex items-center gap-4 w-2/4">
            <Input changer={setCarNumber} value={carNumber} type="text" />
            <img src={carIcon} alt="icon" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-8 justify-center">
        <button onClick={() => navigate(isEditing ? "/" : "/confirm")} className=" flex items-center gap-3 py-2 pl-4 pr-6 text-sub-dark border rounded">
          <img src={arrowLIcon} alt="icon" />
          Обратно
        </button>
        <button className=" flex items-center gap-3 py-2 pl-6 pr-4 bg-primary text-white rounded">
          Далее
          <img src={arrowRIcon} alt="icon" />
        </button>
      </div>
    </form>
  )
}
