/*
|--------------------------------------------------------------------------
| HTTP kernel file
|--------------------------------------------------------------------------
|
| The HTTP kernel file is used to register the middleware with the server
| or the router.
|
*/

import  router from '@adonisjs/core/services/router'
import server from '@adonisjs/core/services/server'
/**
 * The error handler is used to convert an exception
 * to an HTTP response.
 */
server.errorHandler(() => import('#exceptions/handler'))

/**
 * The server middleware stack runs middleware on all the HTTP
 * requests, even if there is no route registered for
 * the request URL.
 */
server.use([
  () => import('#middleware/container_bindings_middleware'),
  () => import('@adonisjs/static/static_middleware'),
  () => import('@adonisjs/vite/vite_middleware'),
])

/**
 * The router middleware stack runs middleware on all the HTTP
 * requests with a registered route.
 */
router.use([
  () => import('@adonisjs/core/bodyparser_middleware'),
  () => import('@adonisjs/session/session_middleware'),
  () => import('@adonisjs/shield/shield_middleware'),
  () => import('#middleware/bodyparser_middleware'),
 
  

])
export const middleware = router.named({
  simple: () => {
    // Lazy import that returns a Promise resolving to { default: Class }
    return import('../app/middleware/simple_check_middleware.ts').then((mod) => ({
      default: mod.default,
    }))
  },
})
/**
 * Named middleware collection must be explicitly assigned to
 * the routes or the routes group.
 */

