import { useContext, useRef } from "react";
import Modal from "./Modal";
import Tasks from "./Tasks";
import { ProjectContext } from "../context/projects-context";

export default function SelectedProjects({ project }) {
  const { handleDeleteProject } = useContext(ProjectContext);
  const modalRef = useRef(null);
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleConfirmProjectDelete = () => {
    modalRef.current.open();
  };

  return (
    <>
      <Modal
        ref={modalRef}
        buttonCaption="Confirm"
        cta
        onCtaAction={() => handleDeleteProject(project.id)}
      >
        <h2 className="text-2xl font-bold text-stone-800 my-4">
          Are you sure you want to delete this project?
        </h2>
      </Modal>
      <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4  border-b-2 border-orange-400">
          <div className="flex items-center">
            <h1 className="flex-1 text-3xl font-bold text-stone-600 uppercase">
              {project.title}
            </h1>
            <button
              className="bg-red-400 hover:bg-red-600 hover:text-slate-50 font-semibold transition-all px-4 py-1 rounded-md "
              onClick={handleConfirmProjectDelete}
            >
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400 italic">{formattedDate}</p>
          <p className="text-stone-600 whitespace-pre-wrap bg-orange-200 p-4 rounded-lg">
            {project.description}
          </p>
        </header>
        <Tasks />
      </div>
    </>
  );
}

// TODO:
// 1. able to edit the text in the selectedProject description
// 2. able to edit the tasks in the selecetedProject tasks
