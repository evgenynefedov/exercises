import Task from "./Task"
import React, { useState } from 'react'

function Spotcheck() {

    const [todolist, setTodolist] = useState({
        tasks: [
          { text: "Take out trash", complete: false },
          { text: "Trash talk Carrie", complete: true },
          { text: "Carry boxes upstairs", complete: false }
        ]
    })
  
    const completeTast = (taskText) => {
      let newTodolist = {...todolist}
      let taskIndex = newTodolist.tasks.findIndex(t => t.text == taskText)
  
      newTodolist.tasks[taskIndex].complete = true
      setTodolist(newTodolist)
    }
  
    return (
      <div>
        <h2>Uncompleted tasks</h2>
        {todolist.tasks
            .filter(t => t.complete === false)
            .map(t => <Task text={t.text} completeTast={completeTast} />)}

        <h2>Completed tasks</h2>
        {todolist.tasks
            .filter(t => t.complete === true)
            .map(t => <Task text={t.text} complete={t.complete} completeTast={completeTast} />)}
      </div>
    );
  }
  
  export default Spotcheck;
  