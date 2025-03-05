import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//creating the context
//providing default valeus for help with autoCompletions
export const ProjectContext = createContext({
  projectsState: {
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  },
  handleStartAddProject: () => {},
  handleCancelAddProject: () => {},
  handleAddProject: () => {},
  handleSelectProject: () => {},
  handleDeleteProject: () => {},
  handleAddTask: () => {},
  handleDeleteTask: () => {},
});

//providing the context outside

export default function ProjectContextProvider({ children }) {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //valid ID when projected is selected, null when we want to add a new project, undefined when we are not adding any project and also didnt select any project, initially should be in undefined state, as we have not selected any project
    projects: [], //to hold all the projects
    tasks: [], //to hold all the tasks associated with projects
  });

  const handleAddTask = (task) => {
    setProjectsState((prevState) => {
      const newTask = {
        taskId: uuidv4(),
        task: task,
        projectId: prevState.selectedProjectId, //task should be associated with the project in which it was added, we can get that from selectedProjectId since we can only add a task when we have a project selected
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.taskId !== id),
    }));
  };

  const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleAddProject = ({ title, desc, dueDate }) => {
    const newProject = {
      title: title,
      description: desc,
      dueDate: dueDate,
      id: uuidv4(),
    };

    setProjectsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
      selectedProjectId: undefined,
    }));
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  };

  const handleDeleteProject = (id) => {
    setProjectsState((prevState) => ({
      projects: prevState.projects.filter((project) => project.id !== id),
      selectedProjectId: undefined,
    }));
  };

  const projectContextValue = {
    projectsState,
    handleStartAddProject,
    handleSelectProject,
    handleAddProject,
    handleCancelAddProject,
    handleDeleteProject,
    handleAddTask,
    handleDeleteTask,
  };
  return (
    <ProjectContext.Provider value={projectContextValue}>
      {children}
    </ProjectContext.Provider>
  );
}
