import { Routes, Route } from "react-router-dom";
import './App.css'
import NavigationBar from "./Components/Navigation/NavigationBar.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Home from "./pages/Homepage/Home.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Search from "./pages/Search/Search.jsx";
import Teaser from "./Components/Teaser/Teaser.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import PrivateRoute from "./Components/PrivateRoute.jsx";


function App() {
    return (
    <>
        <NavigationBar />
        <Teaser />

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path='/' element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/search" element={<Search/>}/>
            </Route>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>

        <Footer />

    </>
  )
}

export default App;