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
        type="password"
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
    username: "hen@hen.nl",
    password: "123456",
    valid: true
  }),
  mounted() {
    this.$refs.username.focus()
  },
  methods: {
    async login() {
      try {
        return await this.$auth.login({
          data: {
            username: this.username,
            password: this.password
          }
        })
      } catch (error) {
        this.$store.commit("addError", error)
      }
    }
  }
}
</script>
