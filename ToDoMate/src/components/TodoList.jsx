import { useEffect, useMemo, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
const STORAGE_KEY = "todos_table";
function getAllTodos() {
  const raw = localStorage.getItem(STORAGE_KEY);
  try {
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveAllTodos(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getCurrentUserEmail() {
  const raw = localStorage.getItem("currentUser"); 
  try {
    const user = raw ? JSON.parse(raw) : null;
    return user?.email || null;
  } catch {
    return null;
  }
}

export default function TodoList() {
  const userKey = getCurrentUserEmail(); 
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!userKey) {
      setTodos([]);
      return;
    }
    const all = getAllTodos();
    const userTodos = all[userKey] || [];
    setTodos(userTodos);
    setLoaded(true);
  }, [userKey]);

  useEffect(() => {
    if (!loaded || !userKey) return;
    const all = getAllTodos();
    all[userKey] = todos;
    saveAllTodos(all);
  }, [todos, userKey, loaded]);
  const addTodo = (title) => {
    if (!title.trim()) return;
    const newItem = {
      id: Math.random(),
      title,
      done: false,
      createdAt: Date.now(),
    };
    setTodos((t) => [newItem, ...t]);
  };

  const toggle = (id) =>
    setTodos((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));

  const deleteTodo = (id) => setTodos((t) => t.filter((x) => x.id !== id));

  const updateTodo = (id, title) =>
    setTodos((t) => t.map((x) => (x.id === id ? { ...x, title } : x)));

  const clear = () => setTodos((t) => t.filter((x) => !x.done));

  const stats = useMemo(() => {
    const total = todos.length;
    const done = todos.filter((x) => x.done).length;
    return { total, done, left: total - done };
  }, [todos]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5 text-gray-100">Your Tasks</h2>

      <AddTodoForm onAdd={addTodo} />

      {todos.length > 0 && (
        <div className="flex justify-between items-center mb-4 text-gray-400">
          <small className="text-white">
            Total: {stats.total} • Completed: {stats.done} • Remaining:{" "}
            {stats.left}
          </small>
          {stats.done > 0 && (
            <button
              onClick={clear}
              className="px-3 py-1 cursor-pointer rounded-lg text-white font-semibold bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition"
            >
              Delete {stats.done} items
            </button>
          )}
        </div>
      )}

      {todos.length === 0 ? (
        <p className="text-gray-400 italic text-center py-10">
          No tasks yet — add your first one!
        </p>
      ) : (
        <ul className="list-none p-0 grid gap-3">
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              onToggle={toggle}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}