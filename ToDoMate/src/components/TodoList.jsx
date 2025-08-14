import { useEffect, useMemo, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

const LS_KEY = "todos";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    try {
      setTodos(raw ? JSON.parse(raw) : []);
    } catch {
      setTodos([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos));
  }, [todos]);

  const add = (text) => {
    const newItem = {
      id: Date.now() + Math.random(),
      text,
      done: false,
      createdAt: Date.now(),
    };
    setTodos((t) => [newItem, ...t]);
  };

  const toggle = (id) => {
    setTodos((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));
  };

  const del = (id) => {
    setTodos((t) => t.filter((x) => x.id !== id));
  };

  const update = (id, text) => {
    setTodos((t) => t.map((x) => (x.id === id ? { ...x, text } : x)));
  };

  const clearDone = () => setTodos((t) => t.filter((x) => !x.done));
  const stats = useMemo(() => {
    const total = todos.length;
    const done = todos.filter((x) => x.done).length;
    return { total, done, left: total - done };
  }, [todos]);

  return (
    <div>
      <AddTodoForm onAdd={add} />
      {todos.length != 0 ? (
        <div className="flex justify-between items-center mb-3">
          <small className="text-gray-600">
            Total: {stats.total} • Completed: {stats.done} • Remaining:{" "}
            {stats.left}
          </small>
          {stats.done > 0 ? (
            <button
              onClick={clearDone}
              disabled={stats.done === 0}
              className={`px-3 py-1 rounded-md text-white transition bg-red-500
          ${
            stats.done === 0
              ? "bg-gray-400 cursor-not-allowed"
              : " hover:bg-red-600"
          }
        `}
            >
              Clear Completed
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {todos.length === 0 ? (
        <p className="text-gray-500">No tasks yet — add your first one </p>
      ) : (
        <ul className="list-none p-0 grid gap-2">
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              onToggle={toggle}
              onDelete={del}
              onUpdate={update}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
