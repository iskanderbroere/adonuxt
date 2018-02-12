<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      {{ this.$auth.state }}
    </h1>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
    <form @keydown.enter="login">
        <input v-model="username" placeholder="Use any username" ref="username" />

        <input type="password" v-model="password" placeholder="Use '123'" />

      <div>
        <a class="button" @click="login">Login</a>
        <a class="button" @click="logout">Logout</a>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        username: 'hank@h2ank.nl',
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
            this.hasError = true
          })
      },
      async logout() {
        return this.$auth.logout().catch(e => {
          this.hasError = true
        })
      }
    }
  }
</script>


<style scoped>
  .title {
    margin: 50px 0;
  }
</style>
