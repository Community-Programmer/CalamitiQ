import "./App.css";
import MainLayout from "./Layout/MainLayout";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
