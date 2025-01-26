import { useContext, useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import { ProjectContext } from "../context/projects-context";

export default function NewProject() {
  //here we want to read and validate only when user clicks SAVE, no need of onChange input validation, so making use of Refs

  const { handleAddProject, handleCancelAddProject } =
    useContext(ProjectContext);
  const title = useRef(null);
  const description = useRef(null);
  const dueDate = useRef(null);
  const modalRef = useRef(null);

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      //open with an animation
      modalRef.current.open();
      return;
    }
    handleAddProject({
      title: enteredTitle,
      desc: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2
          className="text-2xl font-bold text-stone-800 my-4 uppercase"
          id="modal-title"
        >
          Invalid input
        </h2>
        <p className="text-stone-900 mb-4 font-semibold">
          Oops...looks like you forgot to enter a value
        </p>
        <p className="text-stone-900 mb-4 font-semibold">
          Please make sure you provide a valid value for each field
        </p>
      </Modal>
      <section className="mt-16 w-[35rem]">
        <menu className="flex items-center gap-4 justify-end my-4">
          <li>
            <button
              className="bg-stone-700 hover:bg-stone-800 text-slate-200 hover:text-slate-50 rounded px-4 py-1 transition-all hover:cursor-pointer"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
          <li>
            <button
              className="bg-red-500 hover:bg-red-600 text-slate-100 hover:text-slate-50 rounded py-1 px-4 transition-all hover:cursor-pointer"
              onClick={handleCancelAddProject}
            >
              Cancel
            </button>
          </li>
        </menu>
        {/* can use form for better semantics */}
        <div>
          <Input label="Title" ref={title} />
          <Input label="Description" isTextArea ref={description} />
          <Input label="Due Date" type="date" ref={dueDate} />
        </div>
      </section>
    </>
  );
}
