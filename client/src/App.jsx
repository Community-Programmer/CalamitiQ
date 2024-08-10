import { useState } from "react";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
