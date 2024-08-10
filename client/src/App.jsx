import { useState } from "react";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Community from "./pages/Community/Community";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
