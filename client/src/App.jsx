import "./App.css";
import MainLayout from "./Layout/MainLayout";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Disaster from "./pages/Add_Disaster/Disaster";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path = "/add-disaster" element={<Disaster />} />
        </Route>
      </Routes>

      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      </Routes>
      
    </>
  );
}

export default App;
