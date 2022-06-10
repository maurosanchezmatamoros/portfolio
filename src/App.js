import Navbar from "./Components/Navbar/Navbar"
import AboutMe from "./Components/Main/AboutMe"
import MyProjects from "./Components/Main/MyProjects"
import CV from "./Components/Main/CV"
import Hobbies from "./Components/Main/Hobbies"
import Contact from "./Components/Main/Contact"
import Language from "./Components/Main/Language"
import Footer from "./Components/Footer/Footer"
import { LanguageContextProvider } from "./Context/LanguageContext"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import "./App.css"

function App() {
  
  return (
    <>
      <LanguageContextProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <div style={{height: "10rem"}}></div>
            <Routes>
              <Route path='/' element={
                <>
                <Language />
                <AboutMe />
                <MyProjects />
                <CV />
                <Hobbies />
                <Contact />
                </>
              } />
              <Route path='/aboutme' element={<AboutMe />} />
              <Route path='/myprojects' element={<MyProjects />} />
              <Route path='/cv' element={<CV />} />
              <Route path='/hobbies' element={<Hobbies />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<h1>Page not found</h1>} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </LanguageContextProvider>
    </>
  )
}

export default App;
