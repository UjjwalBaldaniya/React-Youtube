import "./App.css";

import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import MainLayout from "./components/layout/MainLayout";
import Sidebar from "./components/layout/Sidebar";
import SignIn from "./Pages/auth/SignIn";
import SignUp from "./Pages/auth/SignUp";
import Home from "./Pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar />
        <MainLayout>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </MainLayout>
      </Box>
    </BrowserRouter>
  );
};

export default App;
