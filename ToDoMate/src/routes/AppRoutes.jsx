import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </div>
  )
}

export default AppRoutes
