import {createContext, useState} from 'react'

// use create conext to create our contect for our todos
const TodosContext = createContext()

function Provider({children}) {
  const [count, setCount] = useState(5)

  const valuesToShare = {
    count: count,
    incrementCount: () => {
      setCount(count + 1)
    },
  }

  return (
    <TodosContext.Provider value={valuesToShare}>
      {children}
    </TodosContext.Provider>
  )
}

// named export
export {Provider}
//export as default
export default TodosContext

// import TodosContext, {Provider} from './content/....'