import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/', async ({request}) => {
    return 'hello world from routes'
    console.log(request.body())
})
    
    router.get('/about', () => {
      return 'This is the about page.'
    })

    router.get('/posts/:id/:title', ({ params }) => {
      return `This is post with id ${params.id} and title ${params.title}`
    })
    router.get('/posts/:first/*', ({ params }) => {
        return `This is post with id ${params.first} and title ${params['*']}`}
    )
router
  .get('/hello', () => {
    return 'Hello, World!'
  })
  .use([middleware.simple()])