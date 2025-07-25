import { AppState } from "../AppState.js"
import { ToDos } from "../models/ToDos.js"
import { api } from "./AxiosService.js"


class ToDosService {

  async getTodos() {
    const response = await api.get('api/todos')
    console.log('todo', response.data)
    const todos = response.data.map(pojo => new ToDos(pojo))
    AppState.todos = todos
    console.log(AppState.todos)
  }

}

export const toDosService = new ToDosService()