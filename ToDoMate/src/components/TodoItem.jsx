import  { useState } from "react";

export default function TodoItem({ item, onToggle, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(item.title);

const save = () => {
  const newValue = value.trim();
  if (!newValue) return;
  onUpdate(item.id, newValue);
  setEditing(false);
};


return (
<li className="flex items-center gap-3 p-3 rounded-xl  shadow-sm shadow-gray-600 bg-[#2A2A3B] hover:shadow-lg transition">
  {!editing ? (
    <>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => onToggle(item.id)}
        className="w-5 h-5 accent-gray-300  border rounded-lg cursor-pointer"
      />
      <span className={`flex-1 text-lg ${item.done ? "line-through text-gray-500" : "text-gray-100"}`}>
        {item.title}
      </span>
      <button
        onClick={() => setEditing(true)}
        className="px-3 py-1 text-sm rounded-lg cursor-pointer text-gray-900 font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(item.id)}
        className="px-3 py-1 text-sm rounded-lg cursor-pointer text-white font-semibold bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition"
      >
        Delete
      </button>
    </>
  ) : (
    <>
      <input
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && save()}
        className="flex-1 p-3 border border-gray-600 rounded-xl bg-[#2A2A3B] text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        onClick={save}
        className="px-3 py-1 text-sm rounded-lg cursor-pointer text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition"
      >
        Save
      </button>
      <button
        onClick={() => setEditing(false)}
        className="px-3 py-1 text-sm rounded-lg cursor-pointer text-white font-semibold bg-gray-500 hover:bg-gray-400 transition"
      >
        Cancel
      </button>
    </>
  )}
</li>


);


}
