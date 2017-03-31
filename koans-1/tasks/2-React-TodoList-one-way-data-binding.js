import React from 'react'

// Users should be able to add tasks to the list.
// Task 1: Add the newTaskAddButton to the render and bind it to a the component method addTask
// Task 2: Implement the `addTask` method. This method should modify the `ToDoList`
// component's state. Changing the state will render this component and its child components.
// Changes in the state must be explicit. That's called one-way data-binding

class TodoList extends React.Component {
  constructor () {
    super()
    this.state = {
      newTask: '',
      tasks: [
        { name: "Learn more advance React, it's awesome!" }
      ]
    }
    this.addTask = this.addTask.bind(this)
  }

  // Task 2. Implement this method to add new tasks to the list
  addTask () {
    let tasks = { tasks: [...this.state.tasks, {name: this.textInput.value}] }
    this.setState(tasks)
  }

  render () {
    let tasksComponents = this.state.tasks.map((task, index) => (
      <ListItem key={index} task={task} />)
    )
    let newTaskInput = <input ref={(input) => { this.textInput = input }}
      type='text' />
    let newTaskAddButton = <button onClick={this.addTask}>Add new Product</button>

    return (
      <div>
        <ul>
          {tasksComponents}
        </ul>
        {newTaskInput}
        {newTaskAddButton}
      </div>
    )
  }
}

export const ListItem = props => (
  <li>
    {props.task.name}
  </li>
)

export default TodoList
