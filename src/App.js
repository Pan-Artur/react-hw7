import './App.css';
import { Component } from "react";
import { TaskList } from './components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Список завдань</h1>
        <TaskList />
      </div>
    );
  }
}

export default App;
