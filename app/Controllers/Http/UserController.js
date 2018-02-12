'use strict'

const User = use('App/Models/User')
// const { validate } = use('Validator')

class UserController {
  async index () {
    const users = await User.all()
    return users
  }
  async login ({ request, auth }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
  }
  show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else profile'
    }
    return auth.user
  }
  async store ({ session, request, response }) {
    /**
     * Getting needed parameters.
     *
     * ref: http://adonisjs.com/docs/4.0/request#_only
     */
    const data = request.only(['username', 'email', 'password', 'password_confirmation'])
    console.log(data)
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
    const newUser = await User.create(data)
    console.log(newUser)
  }
}

module.exports = UserController
