import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todo: [{
        id: 1,
        todo: "Todo Msg",
        completed: false,
    }],
    addTodo: (id,todo) => {},
    updateTodo: (id)=> {},
    deleteTodo: (id) => {},
    togolcomplete: (id) => {},

})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
