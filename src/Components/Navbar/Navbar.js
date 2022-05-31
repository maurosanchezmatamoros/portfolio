import { useState } from "react"
import Categories from "./Categories"
import MobileMenu from "./MobileMenu"
import "./Navbar.css"
import Social from "./Social"

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState("navbarExtended")
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const handleScroll = () => {
        window.scrollY > 0?
        setShowNavbar("navbarNotExtended")
        :
        setShowNavbar("navbarExtended")
    }

    const handleClick = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    window.addEventListener("scroll", handleScroll)

    return (
        <header>
            {window.scrollY > 0?
            <>
                <nav>
                    <div className="HamburgerMenu" onClick={handleClick}>
                        <img src="./svg/menu.svg" alt="menu" className="HamburgerMenu__svg"/>
                    </div>
                    <Categories />
                    <Social />
                    {showMobileMenu? <MobileMenu handleClick={handleClick} /> : <></>}
                </nav>
            </> : <></>
            }
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