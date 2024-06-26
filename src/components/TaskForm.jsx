import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-md"
      >
        <h1 className="text-2xl font-bold text-white mb-3">
          Ingresa una tarea
        </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-slate-950 p-2 text-white hover:bg-slate-900 rounded-md">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
