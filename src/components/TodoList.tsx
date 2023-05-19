import styles from "./TaskComponent.module.css";
import todoListIcon from "../assets/todo-list.svg";
import { useEffect, useState } from "react";
import { Circle, CheckCircle, Trash } from "@phosphor-icons/react";

interface TodoListProps {
  tasks: Array<TodoListProps>
  deleteTask: Function
  handleCheckTask: (checkedTasks: Record<number, boolean>) => void}

export function TodoList({ tasks, deleteTask, handleCheckTask }: TodoListProps) {
  console.log('deleteTask', deleteTask)
  const [checkedTasks, setCheckedTasks] = useState<Record<number, boolean>>({});
  useEffect(() => {
    handleCheckTask(checkedTasks);
  }, [checkedTasks, handleCheckTask]);

  const handleCheck = (index: number) => {
    setCheckedTasks((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleDeleteTask = (index: any) => {
    const taskToDelete = tasks[index];
    const isChecked = checkedTasks[index];
  
    if (isChecked) {
      setCheckedTasks((prevState) => {
        const updatedCheckedTasks = Object.values(prevState).filter((item, i) => {
          return i !== index;
        });
        return updatedCheckedTasks;
      });
  
      handleCheckTask(index);
    }
  
    deleteTask(taskToDelete);
  };
  

  if (tasks.length === 0) {
    return (
      <>
        <section className={styles.tasksContainer}>
          <img src={todoListIcon} alt="Todo List" />
          <div className={styles.messageContainer}>
            <strong className={styles.noTaskMessage}>
              Você ainda não tem tarefas cadastradas
            </strong>
            <span className={styles.noTaskMessage}>
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {tasks.map((item, index) => {
        const isChecked = !!checkedTasks[index];
        return (
          <div className={styles.taskElement} key={index}>
            <div className={styles.taskContent}>
              <button
                className={styles.checkBox}
                onClick={() => handleCheck(index)}
              >
                {isChecked ? (
                  <CheckCircle className={styles.checkCircle} weight="fill" />
                ) : (
                  <Circle weight="bold" />
                )}
              </button>
              <p className={isChecked ? styles.checkedText : undefined}>{item}</p>
            </div>
            <button
              onClick={() => handleDeleteTask(index)}
              className={styles.trashButton}
            >
              <Trash weight="bold" />
            </button>
          </div>
        );
      })}
    </>
  );
}
