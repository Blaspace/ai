import React from "react";
import { Route, Routes } from "react-router-dom";
import Loging from "./pages/Login";
import Index from "./pages/Index";
import Image from "./pages/Image";
import RootRout from "./pages/RootRout";
import ProtectedRoute from "./component/ProtectedRoute";
import PersistentLogin from "./component/PersistentLogin";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<RootRout />}>
          <Route element={<PersistentLogin />}>
            <Route element={<ProtectedRoute />}>
              <Route index element={<Index />} />
              <Route path="image" element={<Image />} />
            </Route>
          </Route>
        </Route>
        <Route path="login" element={<Loging />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
