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
  <form 
    onSubmit={submit} 
    className="flex items-center gap-3 bg-white p-4 rounded-lg "
  >
    <input
      type="text"
      placeholder="Add a new task..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button 
      type="submit" 
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
    >
      Add
    </button>
  </form>
);

}
