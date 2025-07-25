import { AppState } from "../AppState.js";
import { toDosService } from "../services/ToDosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";


export class ToDosController {

  constructor() {
    console.log('This is the ToDos Controller, what what!!!')
    AppState.on('user', this.getTodos)
    AppState.on('identity', this.drawToDos)
    AppState.on('todos', this.drawToDos)
    AppState.on('todos', this.getToDosForm)

  }

  async getTodos() {
    try {
      await toDosService.getTodos()
    } catch (error) {
      console.log('Could not get ToDos', error)
      // @ts-ignore
      Pop.error(error, 'Could not get todos')
    }
  }

  drawToDos() {
    const todos = AppState.todos

    let todosContent = ''
    AppState.todos.forEach(todos => todosContent += todos.todosList)
    const todoElem = document.getElementById('todosList')
    todoElem.innerHTML = todosContent

    let incomplete = todos.filter(todos => todos.completed == false)

    document.getElementById('todosCount').innerHTML = `${incomplete.length}/${todos.length}`

  }



  async getToDosForm() {
    const todoesFormElem = document.getElementById('todosForm')
    todoesFormElem.querySelector('h1')

  }



  async createTodo() {
    try {
      event.preventDefault()
      const todosForm = event.target
      const todosData = getFormData(todosForm)
      console.log('todoForm', todosData)
      await toDosService.createTodo(todosData)
      console.log('is my form submitting?')
      // @ts-ignore
      todosForm.reset()
    } catch (error) {
      Pop.toast('could not create a task')
      console.error(error)

    }

  }

  async deleteTodo(todoId) {
    try {
      // @ts-ignore
      const confirmed = await Pop.confirm('Are you sure that it is a good idea to delete this?', 'think about your decision here', 'Yes i know that i am a horrible person but it needs to be gone', 'No i decided to keep it')
      console.log('delete button', todoId)
      if (confirmed == false) {
        return
      }
      await toDosService.deleteTodo(todoId)
    } catch (error) {
      Pop.toast('could not delete this task')
      console.error(error)
    }
  }

}