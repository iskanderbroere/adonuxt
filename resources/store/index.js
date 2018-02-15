export const state = () => ({
  errors: [],
  posts: []
})

export const mutations = {
  addError(state, error) {
    const newError = {
      message: Array.isArray(error.response.data)
        ? error.response.data[0].message
        : error.response.data.message,
      dateKey: Date.now()
    }
    if (state.errors.length > 9) {
      state.errors = [newError].concat(state.errors.slice(1, 10))
    } else {
      state.errors.push(newError)
    }
  },
  setPosts(state, posts) {
    console.log(posts)
    state.posts = posts
  }
}
