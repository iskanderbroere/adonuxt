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
      return await auth.attempt(username, password)
    }
    catch (e) {
      console.log(e)
      throw e
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
      console.log('Successful logout')
      return { message: 'User succesfully logged out!' }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = SessionController