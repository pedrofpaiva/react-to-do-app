import styles from "./NewTaskInput.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { SetStateAction, useState } from "react";
import { TaskComponent } from "./TaskComponent";
import { FormEvent, ChangeEvent, KeyboardEvent } from "react";

export function NewTaskInput() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask(event.target.value);
  };

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleCreateNewTask(event);
    }
  };

  const deleteTask = (taskToDelete: any) => {
    const updatedTaskList = tasks.filter((item) => {
      return item !== taskToDelete;
    });
    setTasks(updatedTaskList);
  };

  const isTaskInputEmpty = newTask.length === 0

  return (
    <>
      <form className={styles.newTaskForm}>
        <textarea
          onKeyDown={handleKeyPress}
          value={newTask}
          onChange={handleTextChange}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="button" disabled={isTaskInputEmpty} onClick={handleCreateNewTask}>
          <PlusCircle color="#F2F2F2" size={16} weight="bold" />
          Criar
        </button>
      </form>
      <TaskComponent tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}
