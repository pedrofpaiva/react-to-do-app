import styles from "./TaskComponent.module.css";
import todoListIcon from "../assets/todo-list.svg";
import { useState } from "react";
import { Circle, CheckCircle, Trash } from "@phosphor-icons/react";

export function TodoList({ tasks, deleteTask, handleCheckTask}) {
  const [isChecked, setIsChecked] = useState(true);
  const [checkedTasks, setCheckedTasks] = useState({});

  const handleCheck = (index) => {
    setCheckedTasks((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    handleCheckTask(checkedTasks);

  };
console.log('tasks', tasks)

  const handleDeleteTask = (index: string | number) => {
    const taskToDelete = tasks[index];
    deleteTask(taskToDelete);
  };

  return (
    <>
      {tasks.length > 0 &&
        tasks.map((item, key) => (
          <div className={styles.taskElement} key={key}>
            <div className={styles.taskContent}>
              <button
                className={styles.checkBox}
                onClick={() => handleCheck(key)}
              >
                {isChecked ? (
                  <Circle weight="bold" />
                ) : (
                  <CheckCircle className={styles.checkCircle} weight="fill" />
                )}
              </button>
              <p
                className={
                  checkedTasks[key] ? `${styles.checkedText}` : undefined
                }
              >
                {item}
              </p>
            </div>
            <button
              onClick={() => handleDeleteTask(key)}
              className={styles.trashButton}
            >
              <Trash weight="bold" />
            </button>
          </div>
        ))}

      {tasks.length === 0 && (
        <section className={styles.tasksContainer}>
          <img src={todoListIcon} />
          <div className={styles.messageContainer}>
            <strong className={styles.noTaksMessage}>
              Você ainda não tem tarefas cadastradas
            </strong>
            <span className={styles.noTaksMessage}>
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        </section>
      )}
    </>
  );
}
