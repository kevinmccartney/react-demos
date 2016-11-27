import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialtodoList = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function todos(todoList = initialtodoList, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: todoList.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...todoList
      ]

    case DELETE_TODO:
      return todoList.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return todoList.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case COMPLETE_TODO:
      return todoList.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case COMPLETE_ALL:
      const areAllMarked = todoList.every(todo => todo.completed)
      return todoList.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return todoList.filter(todo => todo.completed === false)

    default:
      return todoList
  }
}
