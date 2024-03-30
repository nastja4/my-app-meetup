import { useState } from "react";

const Home = () => {
  // useState is used to add local state to functional components
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  // updates the task state with the value entered in the input field. It listens for changes in the input field (every keystroke), logs the current input value to the console, and updates the task state with the new value
  const handleTask = (event) => {
    setTask(event.target.value);  // As the user types (event), this value changes to reflect what's in the input box (target)
  }

  const handleSubmit = (event) => {
    event.preventDefault();       // stops the browser from performing the default form submission action - the page won't refresh, and no direct request is sent to the server as a result of the form submission event
    setTasksList((prevTasks) => {
      return [...prevTasks, task]
    });
    setTask("");  // resets the task state back to an empty string, clearing the input field
  }

  return (
    <div>
      <h1>TO-DO APP</h1>
      <form onSubmit={handleSubmit}>
        <input 
          style={{marginBottom: '10px'}}
          type="text" 
          name="task" 
          value={task} 
          onChange={handleTask} 
        />
        <br/>
        <button type="submit">Add to the List</button>
      </form>
      {tasksList.map((task, index) => <p key={index}>{task}</p>)}
    </div>
  )
}

export default Home

 
