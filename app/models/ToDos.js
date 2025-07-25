
export class ToDo {

  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.count = data.count
  }


  get todosList() {
    return `
    <div class="text-end fs-1 fw-bold" id="todosCount" ${this.count}></div>
    <div class="card todoCard mb-4">
                <div class="justify-content-between">
                  <input type="checkbox">
                  <span class="fs-2 text-capitalized">${this.description}</span>
                  <button class="btn btn-outline-dark btn-danger fs-3 fw-bold mb-2 mt-2">Delete</button>
                </div>
            </div>
                  `

  }


}

