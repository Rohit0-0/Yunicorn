import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/', async ({ /*logger*/ request }) => {
  // console.log(request.ip())  // --- IGNORE ---
  // console.log(request.types())
  // console.log(request.accepts(['rohit', 'json', 'xml', 'html']))  // --- IGNORE ---
  console.log(request.id())
  // console.log(logger.info())  // --- IGNORE ---

  return 'hello world from routes'
})
router.patch('/', async ({ request }) => {
  return 'hello world from routes'
})

router.get('/about', () => {
  return 'This is the about page.'
})

router.get('/posts/:id/:title', ({ params }) => {
  return `This is post with id ${params.id} and title ${params.title}`
})
router.get('/posts/:first/*', ({ params }) => {
  return `This is post with id ${params.first} and title ${params['*']}`
})
router
  .get('/hello', () => {
    return 'Hello, World!'
  })
  .use([middleware.simple()])
