import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

const handleLogout = () => {
  localStorage.removeItem("currentUser");
  navigate("/login");
};


  return (
    <div className="min-h-screen bg-[#1E1E2F] flex flex-col items-center py-10 px-4 text-gray-200">
      <div className="w-full lg:w-7xl bg-[#2A2A3B] rounded-2xl shadow-xl p-6 relative z-10">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded mb-4 cursor-pointer"
        >
          Logout
        </button>
        <TodoList />
      </div>
    </div>
  );
}

