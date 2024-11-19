import DataProvider from "@/context/DataProvider";
import { useState } from "react";

const GetData = ({children}) => {
    const [isDark ,setIsDark]=useState<boolean>(false)
  return (
    <DataProvider.Provider
    value={{
        setIsDark , isDark
    }}
  >
    {children}
  </DataProvider.Provider>
  )
}

export default GetData