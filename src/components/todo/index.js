import { useState, useEffect } from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import Filter from './Filter'
import TodoLists from './TodoLists'

function Todo() {
    
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filterType, setFilterType] = useState('all')

  
  useEffect(() => {
    setFilteredTodos(getFilteredTodos(filterType))
  }, [todos, filterType])

    //Perform filtering operation according to the given type
  function getFilteredTodos(filter) {
    if (filter === 'completed') {
      return todos.filter((item) => item.completed === true)
    }

    if (filter === 'active') {
      return todos.filter((item) => item.completed === false)
    }

    return todos
  }

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodo addTodo={setTodos} todos={todos} />
        </header>
        <TodoLists
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        ></TodoLists>
        <Filter
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
          filterType={filterType}
          setFilterType={setFilterType}
          getFilteredTodos={getFilteredTodos}
        ></Filter>
      </section>
        <Footer></Footer>
    </>
  )
}

export default Todo;