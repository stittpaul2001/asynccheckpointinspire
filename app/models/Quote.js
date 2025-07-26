

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
    return `<section id="drawQuotesList" class="hide-book">
              <div class="text-center fs-2 p-2">${this.quote}</div>
              <div class="text-end mx-3 p-2 px-4 fs-4 fw-bold text-capitalize   text-decoration-underline">
              <p class="text-end author">
                <i class="mdi fw-bold  mdi-book-open-page-variant"></i>
                ~ ${this.author} ~
                <i class="mdi fw-bold  mdi-book-open-page-variant"></i>
                </p>
                  </div>
              </div>
            </section>
    `

  }



}