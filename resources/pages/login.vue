<template>
  <v-layout column justify-center align-center>
    <v-form @submit.prevent="login"
            v-model="valid"
            ref="form"
            lazy-validation>
      <v-text-field
        label="Username"
        v-model="username"
        ref="username"
        required
      />
      <v-text-field
        label="Password"
        v-model="password"
        required
      />

      <v-btn
        type="submit"
        :disabled="!valid"
      >
        Log in
      </v-btn>
    </v-form>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    username: "test@test.nl",
    password: "123456",
    valid: true
  }),
  mounted() {
    this.$refs.username.focus()
  },
  methods: {
    async login() {
      if (this.$refs.form.validate()) {
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
      }
    },
    async logout() {
      return this.$auth.logout().catch(e => console.error(e.response))
    },
    async fetchUser() {
      return this.$auth.fetchUser().catch(e => console.error(e.response))
    }
  }
}
</script>
