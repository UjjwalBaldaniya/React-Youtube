import "./App.css";

import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </>
  );
};

export default App;
