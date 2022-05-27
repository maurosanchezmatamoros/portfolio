import { useState } from "react"
import { colors } from "../../Styles/theme"
import { fonts } from "../../Styles/theme"
import Categories from "./Categories"
import "./Navbar.css"
import Social from "./Social"

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState("navbarExtended")

    const styles = {
        backgroundColor: colors.primary,
        fontFamily: fonts.base
    }

    const navStyle = {
        color: colors.white
    }

    const handleScroll = () => {
        window.scrollY > 0?
        setShowNavbar("navbarNotExtended")
        :
        setShowNavbar("navbarExtended")
    }

    window.addEventListener("scroll", handleScroll)

    return (
        <header style={ styles }>
            <nav>
                <Categories />
                <Social />
            </nav>
            <div style={ navStyle } className={showNavbar}>
                <h1>Mauro Sanchez Matamoros</h1>
                <h2>Front-end Developer</h2>
            </div>
        </header>
    )
}

export default Navbar