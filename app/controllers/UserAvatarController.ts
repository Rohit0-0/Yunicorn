import { HttpContext } from '@adonisjs/core/http'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'

export default class UserAvatarsController {
  async update({ request, response }: HttpContext) {
    const avatar = request.file('avatar', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })

    if (!avatar || !avatar.isValid) {
      return response.badRequest({ errors: "error aa gya bro file to upload kro kuch" })
    }
    console.log('Is valid:', avatar.isValid)
    console.log('Errors:', avatar.errors)

    // Move file to storage/uploads with unique name
    await avatar.move(app.makePath('public/uploads'), {
      name: `${cuid()}.${avatar.extname}`,
    })
    console.log('Moved file name:', avatar.fileName)
    console.log('Final path:', avatar.filePath)

    

    // Example: save file name to logged-in user's profile
  

    return { message: 'Avatar uploaded successfully', file: avatar.fileName }
  }
}
