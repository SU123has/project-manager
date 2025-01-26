import { useContext } from "react";
import { ProjectContext } from "../context/projects-context";

export default function ProjectsSidebar({ projects, selectedProjectId }) {
  const { handleStartAddProject, handleSelectProject } =
    useContext(ProjectContext);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72">
      <h2 className="mb-8 uppercase font-bold md:text-2xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          className="bg-stone-600 rounded-xl py-2 px-4 font-semibold italic hover:bg-stone-700 hover:text-stone-100 transition"
          onClick={handleStartAddProject}
        >
          + Add Project
        </button>
      </div>
      <ul className="mt-8 overflow-y-auto overflow-x-hidden pr-3 transition-all">
        {projects.map((project) => {
          let cssClasses =
            "w-full px-4 py-1  text-slate-100 hover:text-slate-50  rounded-md text-md md:text-xl text-left my-1";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-orange-400 relative top-0 left-[12px]";
          } else {
            cssClasses += " bg-stone-700 hover:bg-stone-600";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => handleSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
