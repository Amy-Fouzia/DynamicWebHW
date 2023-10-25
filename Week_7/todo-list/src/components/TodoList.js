import {useContext} from 'react'
import TodosContext from '../context/todos'
import TodoItem from './TodoItem'

export default function TodoList(props) {
  const {todos, onDelete, onEdit} = props
  const {count, incrementCount} = useContext(TodosContext)
  const renderedTodos = todos.map((todo) => {
    return (
      <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
    )
  })

  return (
    <div>
      {count}
      <button onClick={incrementCount}>Add to Count</button>
      {renderedTodos}
    </div>
  )
}