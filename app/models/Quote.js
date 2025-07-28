

// "quote": "Code small, debug small",
// "author": "Mick",
// "source": "Me, your instructor"

export class Quotes {

  constructor(data) {
    this.quote = data.quote
    this.author = data.author
    this.source = data.source

  }


  get quotesList() {
    return `
              <div class="text-center fs-2 p-2 quote-author-stay">${this.quote}</div>
              <div class="text-end quote-author mx-3 p-2 px-4 fs-4 fw-bold text-capitalize   text-decoration-underline">
                <i class="mdi fw-bold  mdi-book-open-page-variant"></i>
                ~ ${this.author} ~
                <i class="mdi fw-bold  mdi-book-open-page-variant"></i>
                </div>
              </div>
            
    `

  }



}