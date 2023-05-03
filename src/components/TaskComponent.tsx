import { useState } from "react";
import styles from "./TaskComponent.module.css";
import { TodoList } from "./TodoList";

interface TaskComponentProps {
  tasks?: object;
  deleteTask?: any;
}

export function TaskComponent({ tasks, deleteTask }: TaskComponentProps) {
  const [completedTasks, setCompletedTasks] = useState(0);
  
  const handleCheckTask = (checkedTasks: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    const completed = Object.values(checkedTasks).filter(Boolean).length + 1;
    console.log('completed', completed)
    setCompletedTasks(completed);
  }

  let numberOfTasks = tasks?.length;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <span className={styles.createdTask}>Tarefas Criadas</span>
          <span className={styles.counter}>{numberOfTasks}</span>
        </div>
        <div className={styles.titleWrapper}>
          <span className={styles.done}>Concluídas</span>
          <span className={styles.counter}>{completedTasks} de {numberOfTasks}</span>
        </div>
      </div>
      <TodoList tasks={tasks} deleteTask={deleteTask} handleCheckTask={handleCheckTask}/>
    </div>
  );
}
