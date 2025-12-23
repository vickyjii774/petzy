import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";



const Navbar = ({ isLoggedIn, setIsLoggedIn, scrollToFooter }) => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => navigate("/login");

  const confirmLogout = async () => {
    setLoggingOut(true);
    try {
      const token = localStorage.getItem("token");
      await axios.get("http://localhost:5000/customers/logout", {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch {

    } finally {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/login");
      setShowLogoutModal(false);
      setLoggingOut(false);
    }
  };

  const LogoutIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );

  const LoginIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
      />
    </svg>
  );



  return (
    <div>
      <div className="h-3 bg-gradient-to-r from-cyan-700 via-teal-700 to-emerald-700"></div>
      <nav className="bg-gradient-to-r from-cyan-700 via-teal-700 to-emerald-700 shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">

          <Link to="/">
  <img
    src="/petzy101.png"
    alt="Petzy"
    className="h-16 md:h-20 lg:h-24 w-auto cursor-pointer"
  />
</Link>




            <div className="text-red-200 text-sm md:text-base font-semibold">
              Your One-Stop Pet Store
            </div>
          </div>


          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-cyan-50 hover:text-red-200 transition-colors duration-300 font-medium text-lg">Home</a>
            <a href="/menu" className="text-cyan-50 hover:text-red-200 transition-colors duration-300 font-medium text-lg">Shop</a>
            <a href="/about" className="text-cyan-50 hover:text-red-200 transition-colors duration-300 font-medium text-lg">About</a>
            <a onClick={scrollToFooter} className="text-cyan-50 hover:text-red-200 transition-colors duration-300 font-medium text-lg cursor-pointer">Contact</a>
            {!isLoggedIn ? (
              <button onClick={handleLogin} className="flex items-center gap-2 bg-red-300 text-cyan-900 px-4 py-2 rounded-lg font-bold hover:text-red-200 transition-colors duration-300 shadow-md hover:shadow-lg">
                <LoginIcon />
                <span>Login</span>
              </button>
            ) : (
              <button onClick={() => setShowLogoutModal(true)} className="bg-cyan-800 text-red-200 p-2 rounded-lg hover:bg-cyan-900">
                <LogoutIcon />
              </button>
            )}
          </div>


          <div className="md:hidden flex items-center space-x-3">
            {!isLoggedIn ? (
              <button onClick={handleLogin} className="flex items-center gap-2 bg-red-300 text-cyan-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 shadow-md hover:shadow-lg">
                <LoginIcon />
                <span>Login</span>
              </button>
            ) : (
              <button onClick={() => setShowLogoutModal(true)} className="bg-cyan-800 text-red-200 p-2 rounded-lg">
                <LogoutIcon />
              </button>
            )}
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-cyan-50">
              <div className="w-6 h-0.5 bg-cyan-50 mb-1"></div>
              <div className="w-6 h-0.5 bg-cyan-50 mb-1"></div>
              <div className="w-6 h-0.5 bg-cyan-50"></div>
            </button>
          </div>
        </div>


        {menuOpen && (
          <div className="md:hidden flex flex-col bg-gradient-to-r from-cyan-700 to-teal-700 px-4 py-3 space-y-2">
            <a href="/" className="text-cyan-50 hover:text-red-200">Home</a>
            <a href="/menu" className="text-cyan-50 hover:text-red-200">Shop</a>
            <a href="/about" className="text-cyan-50 hover:text-red-200">About</a>
            <a onClick={scrollToFooter} className="text-cyan-50 hover:text-red-200 cursor-pointer">Contact</a>
          </div>
        )}
      </nav>


      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 text-center">
            <h3 className="text-xl font-bold text-cyan-900 mb-3">Logout?</h3>
            <p className="text-slate-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex gap-3">
              <button onClick={() => setShowLogoutModal(false)} className="flex-1 border-2 border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-50">Cancel</button>
              <button onClick={confirmLogout} disabled={loggingOut} className="flex-1 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-cyan-700 hover:to-teal-700">
                {loggingOut ? "..." : "Yes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
