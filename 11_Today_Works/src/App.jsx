import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './componet/TodoForm'
import Todoitem from './componet/Todoitem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(),...todo},...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => (prev.filter((todo)=>(todo.id !==id))) )
  }

  const togolcomplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0)
    setTodos(todos)
  },[])

  useEffect(()=> {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,togolcomplete}}>
      <div className='w-full max-w-2xl mx-auto mb-5 shadow-md rounded-lg px-4 py-3 text-white bg-lime-200 '>
        <h1 className='text-2xl font-bold text-center mb-8 mt-2 text-gray-800'>Manage Your Todos</h1>
        <div className='mb-4'></div>
          {/* Todo form goes here */} 
          <TodoForm/>

      </div>
      <div className='flex flex-wrap gap-y-3'>
        {/*Loop and Add To  doItem here */}
        {todos.map((todo) => (
          <div key = {todo.id} className='w-full'>
              <Todoitem todo = {todo}/>
          </div>
        ))}
      </div>
    </TodoProvider>
  )
}

export default App
