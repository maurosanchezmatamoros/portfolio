import Navbar from "./Components/Navbar/Navbar"
import AboutMe from "./Components/Main/AboutMe"
import MyProjects from "./Components/Main/MyProjects"
import CV from "./Components/Main/CV"
import Hobbies from "./Components/Main/Hobbies"
import Contact from "./Components/Main/Contact"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import "./App.css"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <div style={{height: "10rem"}}></div>
          <Routes>
            <Route path='/' element={
              <><AboutMe />
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
      </BrowserRouter>
    </>
  )
}

export default App;
