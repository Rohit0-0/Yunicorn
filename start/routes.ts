import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
// import { time } from 'console'
import fs from 'fs'
import app from '@adonisjs/core/services/app'
import UserAvatarsController from '#controllers/UserAvatarController'
router.on('/').render('pages/home')
// router.get('/', async ({response}) => {
//   /** Plain string */
//   // return 'This is the homepage.'

//   /** Html fragment */
//   // return '<h1> This is the homepage </h1>'

//   /** JSON response */
//   // return ({ page: 'home' })

//   /** Converted to ISO string */
//   // console.log(time)
//   // return Date()

//   // response.status(200).send('hello hello')
//   // response.status(201).send('hello hello')
   
//   if (!fs.existsSync('./public/image.png')) {
//     return response.status(404).send('File not   not found')
//   }

//   const imageStream = fs.createReadStream('./public/image.png')
//   response.header('Content-Type', 'image/png')
//   return response.stream(imageStream)
// })



router.post('/avatar', [UserAvatarsController, 'update'])


router.get('/image/:fd',async({ response,params })=>
{
  const filepath = app.makePath(`public/${params.fd}.png`)
  const generateEtag = true
  response.download(filepath,generateEtag)
}
)


router.get('/posts', async ({ response }) => {
  
  response.abort({message:"this is from abort"})
  response.redirect().toPath('/articles')
 
})

// router.get('/articles', async ({ response }) => {
//   response.redirect().toPath('./posts')
// })










// router.get('/', async ({ /*logger*/ request }) => {
//   // console.log(request.ip())  // --- IGNORE ---
//   // console.log(request.types())
//   // console.log(request.accepts(['rohit', 'json', 'xml', 'html']))  // --- IGNORE ---
//   console.log(request.id())
//   // console.log(logger.info())  // --- IGNORE ---

//   return 'hello world from routes'
// })
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
