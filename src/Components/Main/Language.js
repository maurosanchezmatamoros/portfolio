import { useContext } from "react"
import LanguageContext from "../../Context/LanguageContext"
import "./Language.css"

const Language = () => {

    const { language, spanish, english } = useContext(LanguageContext)

    const handleChangeEn = () => {
        english()
    }

    const handleChangeEs = () => {
        spanish()
    }

    return(
        <div className="Language">
            <label>
                <input
                type="radio"
                checked={language === "en"? true : false}
                onChange={handleChangeEn}
                />
                <img src="./svg/en.svg" alt="english" title="English" />
            </label>
            <label>
                <input
                type="radio"
                checked={language === "es"? true : false}
                onChange={handleChangeEs}
                />
                <img src="./svg/es.svg" alt="español" title="Español" />
            </label>
            <span>{language}</span>
        </div>
    )
}

export default Language