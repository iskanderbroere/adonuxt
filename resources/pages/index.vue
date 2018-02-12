<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <p v-if="this.$auth.state.loggedIn">
      {{ this.$store.state.auth }}
    </p>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
    <form @keydown.enter="login">
        <input v-model="username" placeholder="Use any username" ref="username" />

        <input type="password" v-model="password" placeholder="Use '123'" />

      <div>
        <a class="button" @click="login">Login</a>
        <a class="button" @click="logout">Logout</a>
        <a class="button" @click="fetchUser">Fetch</a>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        username: 'test@test.nl',
        password: '123456'
      }
    },
    mounted() {
      this.$refs.username.focus()
    },
    methods: {
      async login() {
        return this.$auth
          .login({
            data: {
              username: this.username,
              password: this.password
            }
          })
          .catch(e => {
            console.log(e.response)
          })
      },
      async logout() {
        return this.$auth.logout().catch(e => console.error(e.response))
      },
      async fetchUser() {
        console.log('Yes you clicked the button.')
        return this.$auth.fetchUser().catch(e => console.error(e.response))
      }
    }
  }
</script>


<style scoped>
  .title {
    margin: 50px 0;
  }
</style>
