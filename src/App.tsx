import "./global.css";
import { TopBar } from "./components/TopBar";
import { TasksContainer } from "./components/TasksContainer";
import { TaskComponent } from "./components/TaskComponent";

function App() {
  return (
    <>
      <TopBar />
      <TasksContainer />
    </>
  );
}

export default App;
