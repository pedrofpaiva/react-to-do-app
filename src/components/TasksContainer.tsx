import styles from "./TasksContainer.module.css";
import { NewTaskInput } from "./NewTaskInput";

export function TasksContainer() {
  return (
    <div className={styles.tasksContainer}>
      <NewTaskInput />
    </div>
  );
}
