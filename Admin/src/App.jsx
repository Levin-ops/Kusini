import React from "react";
import AdminNav from "./Components/AdminNavBar/AdminNav";
import Admin from "./Pages/Admin/Admin";
import LoginSignup from "./Components/AdminLoginSignup/LoginSignup";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const isLoggedIn = localStorage.getItem("auth-token");

  return (
    <>
      {isLoggedIn ? (
        <>
          <AdminNav />
          <Routes>
            {/* The wildcard * allows Admin to handle sub-routes like addproducts and listproducts */}
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginSignup />} />
        </Routes>
      )}
    </>
  );
}

export default App;
