import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
