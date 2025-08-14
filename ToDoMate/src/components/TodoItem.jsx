import  { useState } from "react";

export default function TodoItem({ item, onToggle, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(item.text);

  const save = () => {
    const v = value.trim();
    if (!v) return;
    onUpdate(item.id, v);
    setEditing(false);
  };

return (
  <li className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg">
    {!editing ? (
      <>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => onToggle(item.id)}
          title="Completed?"
          className="w-4 h-4 accent-green-500 cursor-pointer"
        />
        <span
          className={`flex-1 ${
            item.done
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {item.text}
        </span>
        <button
          onClick={() => setEditing(true)}
          title="Edit"
          className="px-2 py-1 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(item.id)}
          title="Delete"
          className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
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
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={save}
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Save
        </button>
        <button
          onClick={() => setEditing(false)}
          className="px-2 py-1 text-sm bg-gray-400 text-white rounded hover:bg-gray-500 transition"
        >
          Cancel
        </button>
      </>
    )}
  </li>
);

}
