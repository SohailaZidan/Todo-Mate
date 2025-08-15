import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-[#1E1E2F] flex flex-col items-center py-10 px-4 text-gray-200">
      <div className="w-full lg:w-7xl bg-[#2A2A3B] rounded-2xl shadow-xl p-6 relative z-10">
      
        <TodoList />
      </div>
    </div>
  );
}
