import React, { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const v = text.trim();
    if (!v) return;
    onAdd(v);
    setText("");
  };
return (
  <form onSubmit={submit} className="flex items-center gap-3 bg-[#3A3A4F] p-4 rounded-xl shadow-inner mb-5">
    <input
      type="text"
      placeholder="Add a new task..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="flex-1 p-3 border  border-gray-600 rounded-xl bg-[#2A2A3B] text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
    <button
      type="submit"
      className="px-5 py-3 cursor-pointer font-semibold rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition duration-200"
    >
      Add
    </button>
  </form>
);



}
