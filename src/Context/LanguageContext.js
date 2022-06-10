import { createContext, useState } from "react";

const LanguageContext = createContext()

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState("en")

    const spanish = () => {
        setLanguage("es")
    }

    const english = () => {
        setLanguage("en")
    }

    return(
        <LanguageContext.Provider
        value={{
            language,
            spanish,
            english
        }}>
            { children }
        </LanguageContext.Provider>
    )
}

export default LanguageContext