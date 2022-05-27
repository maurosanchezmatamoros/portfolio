import "./AboutMe.css"
import { colors } from "../../Styles/theme"

const AboutMe = () => {
    return(
        <div className="AboutMe" style={{color: colors.black}}>
            <h2>About me</h2>
            <img src="./images/mauroHighResol.png" alt="Mauro Sanchez Matamoros" />
            <div className="AboutMe__textBox" style={{border: `3px solid ${colors.black}`, backgroundColor: `${colors.primary}aa`}}>
                <p style={{color: colors.black}}>
                    Hello! Welcome to my portfolio, my name is Mauro Sanchez Matamoros, a front-end developer.
                    I'd like to tell you a little bit of me...
                    I was born in Buenos Aires, Argentina. Since then, I've always lived in Villa Lugano, a town in the south of the Capital City.
                    Being a football passionated and a fan of "Club Atlético Huracán" is something I inherited from my mom and my grandpa.
                    </p>
                <p style={{color: colors.black}}>
                    As regards my professional life, I've got a degree in Accountancy from the Buenos Aires University (UBA), but it was never my real passion.
                    During the pandemic, I discovered how much I like programming and, from that moment, I continued learning and practicing constantly.
                    I've completed the "Front-end React Development" program at <a href="https://www.coderhouse.com/">"Coderhouse"</a>.
                    Some classmates and I created a Development Team named "Timu" and we offered, at first, our services for free to NGOs that needed a website.
                </p>
            </div>
        </div>
    )
}

export default AboutMe