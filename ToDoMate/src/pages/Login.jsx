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
    <div className="flex   items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 max-w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <a className="underline py-3 text-center block text-gray-500">
          <Link to="/">back to home</Link>
        </a>
      </div>
    </div>
  );
}
