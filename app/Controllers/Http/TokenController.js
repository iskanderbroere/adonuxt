"use strict"

class TokenController {
  async store({ auth, request }) {
    const { username, password } = request.all()
    return await auth.attempt(username, password)
  }

  async delete() {
    return { message: "Succesful logout" }
  }
}

module.exports = TokenController
