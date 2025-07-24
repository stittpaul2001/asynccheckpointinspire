import { AppState } from "../AppState.js"
import { imagesService } from "../services/ImagesService.js"

export class ImagesController {

  constructor() {
    AppState.on('images', this.drawImages)
    this.getImages()
  }

  async getImages() {
    try {
      await imagesService.getImages()
    } catch (error) {
      console.error(error)

      // @ts-ignore
      Pop.error(error, 'Could not get images!!!')

    }
  }

  drawImages() {
    const images = AppState.images
    let imagesContent = images.attribution
    const imagesElem = document.getElementById('images')
    // @ts-ignore
    imagesElem.innerHTML = imagesContent
    document.body.style.backgroundImage = `url(${images.imgUrls.regular})`

  }


}