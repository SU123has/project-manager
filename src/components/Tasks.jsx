import { useContext, useRef, useState } from "react";
import Modal from "./Modal";
import { ProjectContext } from "../context/projects-context";

export default function Tasks() {
  const { handleAddTask, handleDeleteTask, projectsState } =
    useContext(ProjectContext);
  const modalRef = useRef(null);
  const [newTask, setNewTask] = useState("");
  const handleAddNewTask = () => {
    //tasks validation
    if (newTask.length === 0) {
      modalRef.current.open();
      return;
    }
    //forward the entered value to App component
    handleAddTask(newTask);
    setNewTask(""); //clear the input field
  };

  const handleEnterPressed = (e) => {
    if (e.key === "Enter") {
      handleAddNewTask();
    }
  };
  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-2xl font-bold text-stone-800 my-4 uppercase">
          Invalid input
        </h2>
        <p className="text-stone-900 mb-4 font-semibold">
          Oops...looks like you forgot to enter the value
        </p>
        <p className="text-stone-900 mb-4 font-semibold">
          Please make sure you provide a valid value.
        </p>
      </Modal>
      <section aria-labelledby="tasks-heading">
        <h2
          id="tasks-heading"
          className="text-2xl font-bold text-stone-700 mb-4"
        >
          Tasks
        </h2>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            className="rounded-lg px-2 border border-orange-50 focus:border-orange-300 outline-none transition"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleEnterPressed}
          />
          <button
            className="px-2 py-1 bg-orange-300 rounded-md hover:bg-orange-400 text-stone-900 hover:text-slate-50 transition-all"
            onClick={handleAddNewTask}
            aria-label="Add new task"
          >
            Add
          </button>
        </div>

        {projectsState.tasks.length === 0 && (
          <p className="text-stone-400 mb-4">
            This project does not have any tasks yet!
          </p>
        )}

        {projectsState.tasks.length > 0 && (
          <ul className="flex flex-col gap-1" aria-live="polite">
            {projectsState.tasks.map((task) => (
              <li
                key={task.taskId}
                className="w-full flex gap-2 group items-center"
              >
                <span className="bg-orange-100 py-1 px-3 rounded-md flex-1 hover:cursor-pointer transition group-hover:bg-orange-200">
                  {task.task}
                </span>
                <button
                  className="text-xl font-semibold text-red-500 transition opacity-0 hover:text-2xl group-hover:opacity-100"
                  onClick={() => handleDeleteTask(task.taskId)}
                  aria-label={`Delete task ${task.task}`}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
