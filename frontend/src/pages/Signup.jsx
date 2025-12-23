import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/customers/register`,
        formData
      );

      console.log("Signup success:", response.data);

      setIsLoggedIn(true);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert(
        error.response?.data?.message ||
        "Signup failed. Please check your input and try again."
      );
    }

  };

  return (
    <div className="min-h-screen bg-red-50">
      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto">
          <div
  className="relative rounded-2xl shadow-2xl border-t-4 border-cyan-100 overflow-hidden"
  style={{
    backgroundImage: "url('/petzy101.png')",
    backgroundSize: "contain", // makes the image smaller
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for readability */}
  <div className="bg-white/90 p-8">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-cyan-500 mb-2">Join Us</h2>
      <p className="text-cyan-950">Create your account</p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-cyan-950 font-semibold mb-2">
            First Name *
          </label>
          <input
            type="text"
            name="firstname"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors duration-300"
            placeholder="First name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-cyan-950 font-semibold mb-2">
            Last Name *
          </label>
          <input
            type="text"
            name="lastname"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors duration-300"
            placeholder="Last name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-cyan-950 font-semibold mb-2">
          Email Address *
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors duration-300"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-cyan-950 font-semibold mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors duration-300"
          placeholder="+977-XXX-XXXXXX"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-cyan-950 font-semibold mb-2">
          Password *
        </label>
        <input
          type="password"
          name="password"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors duration-300"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          className="w-4 h-4 text-cyan-950 border-gray-300 rounded focus:ring-cyan-950 mt-1"
          required
        />
        <span className="ml-3 text-sm text-cyan-500">
          I agree to the{" "}
          <a
            href="/terms"
            className="text-cyan-950 hover:text-cyan-950 font-semibold underline"
          >
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="text-cyan-500 hover:text-cyan-950 font-semibold underline"
          >
            Privacy Policy
          </a>
        </span>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg text-lg font-bold bg-gradient-to-r from-cyan-950 to-cyan-950 text-white hover:from-cyan-950 hover:to-cyan-950 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        Create Account
      </button>
    </form>

    <div className="text-center pt-6">
      <p className="text-cyan-950">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-cyan-500 hover:text-cyan-950 font-bold"
        >
          Sign in here
        </a>
      </p>
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  );
};

export default Signup;
