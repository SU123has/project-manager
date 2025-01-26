import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

import SelectedProjects from "./components/SelectedProjects";
import { ProjectContext } from "./context/projects-context";
import { useContext } from "react";

function App() {
  const { projectsState } = useContext(ProjectContext);
  let content;

  if (projectsState.selectedProjectId === null) {
    //want to add a new project
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    //not selected any project
    content = <NoProjectSelected />;
  } else {
    //show selected project details
    const selectedProject = projectsState.projects.find(
      (project) => project.id === projectsState.selectedProjectId
    );
    content = <SelectedProjects project={selectedProject} />;
  }

  return (
    <main className="h-screen flex">
      <ProjectsSidebar
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      <div className="flex-1 px-8">{content}</div>
    </main>
  );
}

export default App;

// TODO:
// 1. work on responsiveness, currently very low
// 2. work on UI
// 3. add animations when modal or DOM elements gets added
// 4. Add toast on successfully adding to deleting the project or tasks
