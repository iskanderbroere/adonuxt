export const state = () => ({
  errors: [],
  posts: []
})

export const mutations = {
  addError(state, error) {
    console.log(error)
    const newError = {
      message: Array.isArray(error.response.data)
        ? error.response.data[0].message
        : error.response.data.message,
      dateKey: Date.now()
    }
    if (state.errors.length > 2) {
      state.errors = [newError].concat(state.errors.slice(1, 3))
    } else {
      state.errors.push(newError)
    }
  },
  setPosts(state, posts) {
    state.posts = posts
  }
}
