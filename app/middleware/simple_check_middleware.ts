import type { HttpContext } from "@adonisjs/core/http"
import { NextFn } from "@adonisjs/core/types/http"
export default class SimpleCheckMiddleware {
  public async handle(ctx: HttpContext, next: NextFn) {
    // Example check
    if (ctx.request.qs().block === 'true') {
      return ctx.response.unauthorized('Blocked by SimpleCheckMiddleware')
    }

    await next()
  }
}
