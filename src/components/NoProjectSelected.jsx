import { useContext } from "react";
import NoProjectImg from "../assets/no-projects.png";
import { ProjectContext } from "../context/projects-context";

export default function NoProjectSelected() {
  const { handleStartAddProject } = useContext(ProjectContext);
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={NoProjectImg}
        alt="empty-task-list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or create a new one
      </p>
      <button
        className="py-2 px-4 text-lg bg-orange-400 hover:bg-orange-600 text-slate-200 hover:text-slate-50 rounded-xl transition"
        onClick={handleStartAddProject}
      >
        Create new project
      </button>
    </div>
  );
}
