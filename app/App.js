import { AuthController } from './controllers/AuthController.js';
import { ClockController } from './controllers/ClockController.js';
import { ImagesController } from './controllers/ImagesController.js';
import { QuotesController } from './controllers/QuotesController.js';
import { ToDosController } from './controllers/ToDosController.js';
import { WeatherController } from './controllers/WeatherController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()


  clockController = new ClockController()

  imagesController = new ImagesController()

  quotesController = new QuotesController()

  toDosController = new ToDosController()

  weatherController = new WeatherController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
