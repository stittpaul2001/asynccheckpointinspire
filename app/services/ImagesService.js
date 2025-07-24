import { AppState } from "../AppState.js"
import { Images } from "../models/Images.js"
import { api } from "./AxiosService.js"

class ImagesService {

  async getImages() {
    const response = await api.get('api/images')
    console.log('images', response.data)
    const images = new Images(response.data)
    AppState.images = images
  }


}
export const imagesService = new ImagesService()