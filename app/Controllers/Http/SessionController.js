"use strict"

class SessionController {
  async store({ auth, request }) {
    const { username, password } = request.all()
    return await auth.attempt(username, password)
  }

  async delete({ auth }) {
    return await auth.logout()
  }
}

module.exports = SessionController
