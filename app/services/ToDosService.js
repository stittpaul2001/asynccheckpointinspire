import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDos.js"
import { api } from "./AxiosService.js"


class ToDosService {



  async toggleCompletedTodo(todoId) {
    const findTodo = AppState.todos.find(todo => todo.id == todoId)
    findTodo.completed = !findTodo.completed
    const response = await api.put(`api/todos/${todoId}`, findTodo)
    AppState.emit('todos')
  }



  async deleteTodo(todoId) {
    const response = await api.delete(`api/todos/${todoId}`)
    console.log(response.data)
    const todos = AppState.todos
    const todoIndex = todos.findIndex(todo => todo.id == todoId)
    AppState.todos.splice(todoIndex, 1)
  }


  async createTodo(todosData) {
    const response = await api.post('api/todos', todosData)
    console.log('new todo', response.data)
    const newTodo = new ToDo(response.data)
    const todos = AppState.todos
    todos.unshift(newTodo)

  }



  async getTodos() {
    const response = await api.get('api/todos')
    console.log('todo', response.data)
    const todos = response.data.map(pojo => new ToDo(pojo))
    AppState.todos = todos
    console.log(AppState.todos)
  }

}

export const toDosService = new ToDosService()