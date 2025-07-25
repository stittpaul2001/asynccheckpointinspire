import { AppState } from "../AppState.js"
import { Quotes } from "../models/Quote.js"
import { api } from "./AxiosService.js"



class QuotesService {
  async getQuotes() {
    const response = await api.get('api/quotes')
    console.log('quotes', response.data)
    const quotes = new Quotes(response.data)
    AppState.quotes = quotes
  }


}

export const quotesService = new QuotesService()