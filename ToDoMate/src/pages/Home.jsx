import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TodoList from "../components/TodoList";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("currentUser");
    location.reload()
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#1E1E2F] flex flex-col items-center py-10 px-4 text-gray-200">
      <div className="w-full lg:w-7xl bg-[#2A2A3B] rounded-2xl shadow-xl p-6 relative z-10">
        <div className="flex justify-end mb-4">
          <button
            onClick={logout}
            className="px-4 py-2 font-semibold rounded-xl cursor-pointer text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition"
          >
            logout
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  );
}
