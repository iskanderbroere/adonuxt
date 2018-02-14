"use strict"

const User = use("App/Models/User")
// const { validate } = use('Validator')

class UserController {
  show({ auth }) {
    const { username, email } = auth.user
    return { username, email }
  }
  async store({ request }) {
    /**
     * Getting needed parameters.
     *
     * ref: http://adonisjs.com/docs/4.0/request#_only
     */
    const data = request.only([
      "username",
      "email",
      "password",
      "password_confirmation"
    ])
    /**
     * Validating our data.
     *
     * ref: http://adonisjs.com/docs/4.0/validator
     */
    // const validation = await validate(data, {
    //   username: 'required|unique:users',
    //   email: 'required|email|unique:users',
    //   password: 'required',
    //   password_confirmation: 'required_if:password|same:password',
    // })

    /**
     * If validation fails, early returns with validation message.
     */
    // if (validation.fails()) {
    //   session
    //     .withErrors(validation.messages())
    //     .flashExcept(['password'])

    //   return response.redirect('back')
    // }

    // Deleting the confirmation field since we don't
    // want to save it
    delete data.password_confirmation

    /**
     * Creating a new user into the database.
     *
     * ref: http://adonisjs.com/docs/4.0/lucid#_create
     */
    await User.create(data)
  }
}

module.exports = UserController
