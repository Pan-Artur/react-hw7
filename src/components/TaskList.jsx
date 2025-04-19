import { Component } from "react";

export class TaskList extends Component {
  tasks = [
    {
      id: "task-1",
      text: "Приготувати страву та прибрати на кухні після себе",
    },
    {
      id: "task-2",
      text: "Пропилососити килими та підлогу",
    },
    {
      id: "task-3",
      text: "Полити квіти та доглянути за рослинами",
    },
    {
      id: "task-4",
      text: "Протерти дзеркала та вікна",
    },
  ];

  removeTask = (taskId, event) => {
    console.log(taskId);
    
    const button = event.target;
    const li = button.closest("li");
    li.style.display = "none"; 
    li.classList.add("deleted");

    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index > -1) {
        this.tasks.splice(index, 1);
    }

    console.log(this.tasks);
  };

  render() {
    return (
      <>
        <ul>
          {this.tasks.map((task) => (
            <li key={task.id}>
              <h2>{task.text}</h2>
              <button type="button" onClick={(event) => {this.removeTask(task.id, event)}}>
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
