# TaskTrek

A drag-and-drop task management application built with React and Vite.

## Features

- **Create Tasks**: Add tasks with custom tags (HTML, CSS, JavaScript, React)
- **Drag & Drop**: Move tasks between Todo, Doing, and Completed columns
- **Status Management**: Organize tasks by their current status
- **Local Storage**: Tasks persist between browser sessions
- **Delete Tasks**: Remove completed or unwanted tasks

## Tech Stack

- React 18
- Vite
- CSS3
- Local Storage API

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd TaskTrek
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Add a Task**: Enter task description, select tags, choose status, and click "Add Task"
2. **Move Tasks**: Drag tasks between columns to change their status
3. **Delete Tasks**: Click the delete icon on any task card
4. **Tags**: Use color-coded tags to categorize your tasks

## Project Structure

```
src/
├── components/
│   ├── TaskForm.jsx      # Task creation form
│   ├── TaskColumn.jsx    # Column container for tasks
│   ├── TaskCard.jsx      # Individual task display
│   ├── Tag.jsx           # Tag component
│   └── DropArea.jsx      # Drag & drop zones
├── assets/               # Images and icons
└── App.jsx              # Main application component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build