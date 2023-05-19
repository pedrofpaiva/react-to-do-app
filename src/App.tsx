import "./global.css";
import { TopBar } from "./components/TopBar";
import { NewTaskInput } from "./components/NewTaskInput";

function App() {
  return (
    <>
      <TopBar />
      <NewTaskInput />
    </>
  );
}

export default App;
