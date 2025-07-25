import { Images } from './models/Images.js'
import { Quotes } from './models/Quote.js'
import { ToDo } from './models/ToDos.js'
import { Weather } from './models/Weather.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  // /**@type { Identity } */
  identity = null

  /**@type { ToDo[] } */
  todos = []

  /**@type { Quotes } */
  quotes = null

  /**@type { Weather } */
  weather = null

  /**@type { Images } */
  images = null
}

export const AppState = createObservableProxy(new ObservableAppState())