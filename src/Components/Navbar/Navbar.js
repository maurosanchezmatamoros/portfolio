import { useState } from "react"
import Categories from "./Categories"
import "./Navbar.css"
import Social from "./Social"

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState("navbarExtended")

    const handleScroll = () => {
        window.scrollY > 0?
        setShowNavbar("navbarNotExtended")
        :
        setShowNavbar("navbarExtended")
    }

    window.addEventListener("scroll", handleScroll)

    return (
        <header>
            <nav>
                <Categories />
                <Social />
            </nav>
            <div className={showNavbar}>
                <h1>Mauro Sanchez Matamoros</h1>
                <h2>Front-end Developer</h2>
                <span className="animate__animated animate__fadeInDown">Scroll down</span>
                <img className="animate__animated animate__fadeInDown" src="./svg/arrowDown.svg" alt="arrow down" /> 
            </div>
        </header>
    )
}

export default Navbar