'use strict'

class SessionController {
  async store({ auth, request, response, session }) {
    /**
     * Getting needed parameters.
     *
     * ref: http://adonisjs.com/docs/4.0/request#_all
     */
    const { username, password } = request.all()

    /**
     * Wrapping the authentication in order to
     * handle errors when authentication fail.
     *
     * ref: http://adonisjs.com/docs/4.0/authentication#_attempt_uid_password
     */
    try {
      const authenticate = await auth.attempt(username, password)
      console.log(authenticate)
      return authenticate
    } catch (e) {
      console.error(e)
      const error = new Error(e)
      return e
    }
    /**
     * We are authenticated.
     */
  }

  async delete({ auth, response }) {
    /**
     * Logout the user.
     *
     * ref: http://adonisjs.com/docs/4.0/authentication#_logout
     */
    try {
      await auth.logout()
      return { message: 'User succesfully logged out!' }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = SessionController