import "./App.css";
import Nav1 from "./components/Navbar/Navbarr";
import Home from "./components/Home/Home";
import History from "./components/History/History";
import Team from "./components/Team/Team";
import Footer from "./components/Footer";
// import { Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/Mountain-Tour">
        {/* <BrowserRouter> */}
        <Routes>
          <Route exact path="/" element={<Nav1 />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/team" element={<Team />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
