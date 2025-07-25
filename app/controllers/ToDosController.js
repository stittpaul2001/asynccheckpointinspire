import { AppState } from "../AppState.js";
import { toDosService } from "../services/ToDosService.js";
import { Pop } from "../utils/Pop.js";


export class ToDosController {

  constructor() {
    console.log('This is the ToDos Controller, what what!!!')
    AppState.on('identity', this.getTodos)
    AppState.on('todos', this.drawToDos)

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
    let todoContent = ''
    todos.forEach(todo => todoContent += todo.todoTemplate)
    const todoElem = document.getElementById('todosList')
    todoElem.innerHTML = todoContent
  }

}