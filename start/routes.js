"use strict"

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use("Route")

Route.group(() => {
  Route.post("login", "TokenController.store")
}).prefix("api")

Route.group(() => {
  Route.get("user", "UserController.show")
  Route.resource("users", "UserController").apiOnly()
  Route.resource("posts", "PostController").apiOnly()
  Route.get("logout", "TokenController.delete")
})
  .prefix("api")
  .middleware("auth")

Route.any("*", "NuxtController.render")
