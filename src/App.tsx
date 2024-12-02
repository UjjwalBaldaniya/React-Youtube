import "./App.css";

import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Sidebar from "./components/layout/Sidebar";
import Home from "./Pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MainLayout>
      </Box>
    </BrowserRouter>
  );
};

export default App;
