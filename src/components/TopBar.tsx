import styles from "./TopBar.module.css";
import todoListLogo from  '../assets/todo-logo.svg'

export function TopBar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <img src={todoListLogo} alt="Logotipo Todo List"/>
        </div>
      </div>
    </div>
  );
};
