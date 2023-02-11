import React, { useState, createContext, useContext } from 'react'
import { GlobalContextData } from './type'

export const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData)

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [simulateState, setSimulateState] = useState(false)
  const [userData, setUserData] = useState({
    hasKeysRegistered: true,
  })

  const data = {
    userData,
    setUserData,
    simulateState,
    setSimulateState,
  }

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  return useContext(GlobalContext)
}
