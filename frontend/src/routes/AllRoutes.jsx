import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/signup/SignUp";
import Update from "../pages/update/Update";
import Home from "../pages/home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
};

export default AllRoutes;
