<template>
  <v-container>
    <p v-if="this.$auth.state.loggedIn">
      {{ this.$store.state.auth }}
    </p>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
    <form @keydown.enter="login">
      <input v-model="username" placeholder="Use any username" ref="username" >
      <input type="password" v-model="password" placeholder="Use '123'" >
      <div>
        <a class="button" @click="login">Login</a>
        <a class="button" @click="logout">Logout</a>
        <a class="button" @click="fetchUser">Fetch</a>
      </div>
    </form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "test@test.nl",
      password: "123456"
    }
  },
  mounted() {
    this.$refs.username.focus()
  },
  methods: {
    login() {
      return this.$auth
        .login({
          data: {
            username: this.username,
            password: this.password
          }
        })
        .catch(e => {
          console.error("HERRO", e)
        })
    },
    async logout() {
      return this.$auth.logout().catch(e => console.error(e))
    },
    async fetchUser() {
      return this.$auth.fetchUser().catch(e => console.error(e))
    }
  }
}
</script>
