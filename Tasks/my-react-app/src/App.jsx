import './App.css'
import TaskList from './TaskList';

function App() {
  const tasks = ["Learn JSX", "Build a React app", "Explore hooks"];
  return <TaskList tasks={tasks} />;
}


export default App
