import "./App.css";
import MainLayout from "./Layout/MainLayout";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Disaster from "./pages/Add_Disaster/Disaster";
import DisasterMap from "./pages/Disaster_Map/DisasterMap";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { verifyUser } from "./http/authApi";
import { useEffect } from "react";
import { verify } from "./store/authSlice";

function App() {

  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: verifyUser,
    onSuccess: (res) => {
      console.log(res.data);
      dispatch(verify(res.data));
    },
  });

  useEffect(() => {
    mutation.mutate();
    // eslint-disable-next-line
  }, []);

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
      <Route path="/disaster-map" element={<DisasterMap/>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
