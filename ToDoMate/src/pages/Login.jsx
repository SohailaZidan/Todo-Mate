import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password");
      return;
    }

    const isLoggedIn = login(email, password);
    if (isLoggedIn) {
      navigate("/home");
    } else {
      alert("Email or password is incorrect");
    }
  };

return (
  <div className="flex items-center justify-center min-h-screen 
  bg-[#1E1E2F] ">
    <div className="bg-bg-[#2A2A3B]  p-8 rounded-2xl shadow-2xl w-96 max-w-full border border-gray-700">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Login
      </h2>
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 bg-[#2A2A3B] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 bg-[#2A2A3B] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          Login
        </button>
      </form>

      <button className="underline w-full py-3 text-center block text-gray-400 hover:text-white transition">
        <Link to="/">Back to home</Link>
      </button>
    </div>
  </div>
);

}
