import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import {Route, BrowserRouter, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
