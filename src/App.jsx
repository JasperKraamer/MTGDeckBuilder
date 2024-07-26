import { Routes, Route } from "react-router-dom";
import './App.css'
import NavigationBar from "./Components/Navigation/NavigationBar.jsx";
import SignIn from "./Pages/SignIn/SignIn.jsx";
import Home from "./Pages/Homepage/Home.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import Search from "./Pages/Search/Search.jsx";
import Teaser from "./Components/Teaser/Teaser.jsx"
import Footer from "./Components/Footer/Footer.jsx"


function App() {
    return (
    <>
        <NavigationBar />
        <Teaser />

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>

        <Footer />
    </>
  )
}

export default App;