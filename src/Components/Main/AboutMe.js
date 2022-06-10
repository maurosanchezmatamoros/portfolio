import "./AboutMe.css"
import Skills from "./Skills"
import "animate.css"
import { useContext } from "react"
import LanguageContext from "../../Context/LanguageContext"

const AboutMe = () => {

    const {language} = useContext(LanguageContext)

    if(language==="en")
    {return(
        <div className="AboutMe">
            <h2>About me</h2>
            <img src="./images/mauroHighResol.png" alt="Mauro Sanchez Matamoros" />
            <div className="AboutMe__textBox">
                <p>
                    Hello! Welcome to my portfolio, my name is Mauro Sanchez Matamoros and I am a front-end developer.
                    I'd like to tell you a little bit of me...
                    I was born in Buenos Aires, Argentina. Since then, I've always lived in Villa Lugano, a town located in the south of the Capital City.
                </p>
                <p>
                    As regards my professional life, I've got a degree in Accountancy from the Buenos Aires University (UBA), but it was never my real passion.
                    During the pandemic, I discovered how much I like programming and, from that moment, I continued learning and practicing constantly.
                    I've completed the "Front-end React Development" program at <a href="https://www.coderhouse.com/">"Coderhouse"</a>.
                    Some classmates and I created a Development Team named "Timu". We gained experience offering our services for free to NGOs that needed a website.
                </p>
            </div>
            <Skills />
        </div>
    )}

    return(
        <div className="AboutMe">
            <h2>Sobre mí</h2>
            <img src="./images/mauroHighResol.png" alt="Mauro Sanchez Matamoros" />
            <div className="AboutMe__textBox">
                <p>
                    ¡Hola! Bienvenido a mi portfolio, mi nombre es Mauro Sanchez Matamoros, soy front-end developer.
                    y me gustaría contarte un poco sobre mí...
                </p>
                <p>
                    Nací en la Ciudad Autónoma de Buenos Aires, Argentina. Desde ese entonces he vivido en Villa Lugano, un barrio al sur de la misma ciudad.
                </p>
                <p>
                    Respecto a mi profesión, me gradué como Contador Público en la Universidad de Buenos Aires (UBA), pero nunca me apasionó realmente la contabilidad.
                    Durante la pandemia, incursioné en la programación y descubrí lo mucho que me gustaba, y desde ese momento, comencé a estudiar, leer y practicar constantemente.
                    He completado la carrera de "Front-end React Developer" en <a href="https://www.coderhouse.com/">"Coderhouse"</a>.
                </p>
                <p>
                    Junto con algunos compañeros desarrolladores y otros diseñadores hemos conformado un grupo de trabajo al que llamamos "Timu". De esta manera comenzamos a ofrecer nuestros servicios a ONGs que necesitaban de nuestra ayuda, para de esta manera poder sumar experiencia laboral.
                </p>
            </div>
            <Skills />
        </div>
    )
}

export default AboutMe