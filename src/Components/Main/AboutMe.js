import "./AboutMe.css"
import Skills from "./Skills"
import "animate.css"

const AboutMe = () => {
    return(
        <div className="AboutMe">
            <h2>About me</h2>
            <img src="./images/mauroHighResol.png" alt="Mauro Sanchez Matamoros" />
            <div className="AboutMe__textBox">
                <p className="animate__animated animate__backInLeft">
                    Hello! Welcome to my portfolio, my name is Mauro Sanchez Matamoros, a front-end developer.
                    I'd like to tell you a little bit of me...
                    I was born in Buenos Aires, Argentina. Since then, I've always lived in Villa Lugano, a town in the south of the Capital City.
                </p>
                <p className="animate__animated animate__backInRight">
                    As regards my professional life, I've got a degree in Accountancy from the Buenos Aires University (UBA), but it was never my real passion.
                    During the pandemic, I discovered how much I like programming and, from that moment, I continued learning and practicing constantly.
                    I've completed the "Front-end React Development" program at <a href="https://www.coderhouse.com/">"Coderhouse"</a>.
                    Some classmates and I created a Development Team named "Timu". We gained experience offering our services for free to NGOs that needed a website.
                </p>
            </div>
            <Skills />
        </div>
    )
}

export default AboutMe