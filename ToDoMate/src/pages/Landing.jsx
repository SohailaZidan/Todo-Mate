import React from "react";
import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";

const Landing = () => {
return (
  <div className="min-h-screen bg-[#1E1E2F] flex flex-col items-center py-10 px-4 text-gray-200">
    <div className="w-full lg:w-7xl bg-[#2A2A3B] rounded-2xl shadow-xl p-6 relative z-10">
      <div className="flex justify-end mb-4">
        <Link
          to="/login"
          className="px-4 py-2 font-semibold cursor-pointer rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition"
        >
          Login Now
        </Link>
      </div>
      <TodoList />
    </div>
  </div>
);


};

export default Landing;
