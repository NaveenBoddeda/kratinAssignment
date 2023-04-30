import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Do exercise for minimum of 30 minutes in the early morning',
  },
  {
    id: 2,
    title: 'Do Yoga for minimum of 30 minutes in the early morning',
  },
  {
    id: 3,
    title:
      'Take the medicine on time if any in the morning, afternoon and evening',
  },
  {
    id: 4,
    title: 'Take fiber contented nutritious food every day',
  },
  {
    id: 5,
    title: 'Make sure fruits are included in every meal',
  },
  {
    id: 6,
    title:
      'Go for an evening walk every day in a peaceful areas like parks, agricultural fields etc.,',
  },
  {
    id: 7,
    title: 'Spend  quality time with your family everyday',
  },
  {
    id: 8,
    title: 'Enjoy what you are doing',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  completingTodoList = () => {
    const {todosList} = this.state
    if (todosList.length === 0) {
      alert('You completed all of your daily activities')
    }
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">
            Sunitha Sharmas daily todos list to live a healthy and happy life
          </h1>
          <p>
            If task is completed, please click on task completed. It will be
            deleted from todos list
          </p>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
          {this.completingTodoList()}
        </div>
      </div>
    )
  }
}

export default SimpleTodos
