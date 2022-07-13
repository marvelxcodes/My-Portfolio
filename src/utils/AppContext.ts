import { createContext, useContext } from "react"

const AppContext = createContext<object>({})

export { AppContext, useContext }