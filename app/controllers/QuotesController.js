import { AppState } from "../AppState.js";
import { Quotes } from "../models/Quote.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";


export class QuotesController {

  constructor() {
    console.log('quotes Controller saying whats up!')
    AppState.on('quotes', this.drawQuotesList)
    this.getQuotes()

  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {

      // @ts-ignore
      Pop.error(error, 'could not get a quote!')
      console.error(error, 'cant seem to get quotes!')
    }
  }

  drawQuotesList() {
    const quotes = AppState.quotes
    let quotesHTML = quotes.quotesList

    let quotesElem = document.getElementById('drawQuotesList')
    quotesElem.innerHTML = quotesHTML
  }


}