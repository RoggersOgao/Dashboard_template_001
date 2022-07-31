import { createContext } from "react";
import { useReducer } from "react";
import darkmodeReducer from "./DarkmodeReducer";

//creating a provider

const DarkModeContext = createContext()

export const DarkModeProvider = ({children}) => {

const initialState = {
    dark:false
}

const [state, dispatch] = useReducer(darkmodeReducer, initialState)
    return <DarkModeContext.Provider value={{
        state,
        dispatch
    }}>
    {children}
    </DarkModeContext.Provider>
}

export default DarkModeContext