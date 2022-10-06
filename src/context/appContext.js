import { createContext, useEffect, useReducer } from "react"

const INITIAL_STATE = {
  code: "12312",
  user: null,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CODE":
      return { ...state, code: action.payload }
    case "SET_USER":
      return { ...state, user: action.payload }

    default:
      return state
  }
}
export const appContext = createContext()

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    getUser()
    dispatch({
      type: "SET_CODE",
      payload: Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000,
    })
  }, [])

  const getUser = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const user = JSON.parse(localStorage.getItem(currentUser))
    dispatch({
      type: "SET_USER",
      payload: user,
    })
  }


  const changeCode = (code) => {
    dispatch({
      type: "SET_CODE",
      payload: code,
    })
  }
  const setUser = (user) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    })
  }

  return (
    <appContext.Provider
      value={{
        code: state.code,
        user: state.user,
        changeCode,
        setUser,
        getUser,
      }}
    >
      {children}
    </appContext.Provider>
  )
}
