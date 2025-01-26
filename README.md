# React Project Manager

This project is a simple project management application built with React and Vite. It demonstrates various concepts and patterns in React, including context API, hooks, refs, and component composition. The project also uses Tailwind CSS for styling and ESLint for linting.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Concepts and Patterns](#concepts-and-patterns)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/refs-demo-project.git
   ```
2. Navigate to the project directory:
   ```sh
   cd refs-demo-project
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Features

- Add, edit, and delete projects
- Add and delete tasks within projects
- Modal dialogs for validation and confirmation
- Responsive design with Tailwind CSS

## Concepts and Patterns

### Context API

The project uses the Context API to manage the state of projects and tasks. The context is defined in `src/context/projects-context.jsx` and provides functions to manipulate the state.

### Hooks

Various hooks are used throughout the project:

- `useState` for managing local state
- `useContext` for accessing context values
- `useRef` for accessing and manipulating DOM elements

### Refs

Refs are used in the `NewProject` and `Modal` components to handle form inputs and modal dialogs.

### Component Composition

The project is composed of several reusable components, such as `Input`, `Modal`, `ProjectsSidebar`, `SelectedProjects`, and `Tasks`.

## Dependencies

- React
- Vite
- Tailwind CSS
- ESLint
- uuid

For a complete list of dependencies, refer to the `package.json` file.

## License

This project is licensed under the MIT License.
