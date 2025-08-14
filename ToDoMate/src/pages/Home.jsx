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
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome Home </h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
