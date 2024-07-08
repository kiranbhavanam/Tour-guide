// import createContext from react
import { createContext,useContext,useState } from "react";
//create context 
const ThemeContext=createContext(undefined)
//provide context

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("light")
    
    // const toggleTheme=()=>(theme==="light"?setTheme("dark"):setTheme("light"))
   return (<ThemeContext.Provider 
   value={{theme,toggleTheme:()=>setTheme(theme==="light"?"dark":"light")}}
   >
    {children}
   </ThemeContext.Provider>)
}
//use the context
export const useTheme=()=>useContext(ThemeContext);