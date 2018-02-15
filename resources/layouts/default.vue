<template>
  <v-app>
    <error-snackbar v-for="error in errors" :key="error.dateKey" :error="error.message" />
    <v-navigation-drawer
      clipped
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      fixed 
      app 
      clipped-left
      height="100"
      class="secondary"
      dark>
      <div @click="drawer = !drawer" class="hamburger hamburger--collapse" :class="{ 'is-active': drawer }">
        <div class="hamburger-box">
          <div class="hamburger-inner"/>
        </div>
      </div>
      <v-toolbar-title class="display-2">
        Adonuxt
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items v-if="this.$auth.state.loggedIn" class="hidden-sm-and-down">
        <v-btn flat>{{ this.$auth.state.user.username }}</v-btn>
        <v-btn flat @click.stop="logout">Log out</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else class="hidden-sm-and-down">
        <v-btn to="/login" flat>Log in</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content class="mt-4">
      <nuxt />
    </v-content>
    <v-footer class="pa-4" app>
      <v-spacer/>
      <div><v-icon class="text-xs-center">copyright</v-icon> {{ new Date().getFullYear() }}</div>
      <v-spacer/>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex"
import errorSnackbar from "~/components/errorSnackbar.vue"

export default {
  components: {
    "error-snackbar": errorSnackbar
  },
  data() {
    return {
      drawer: false,
      items: [
        { icon: "apps", title: "Welcome", to: "/" },
        { icon: "bubble_chart", title: "login", to: "/login" }
      ]
    }
  },
  computed: mapState({
    errors: state => state.errors
  }),
  methods: {
    async logout() {
      try {
        return await this.$auth.logout()
      } catch (error) {
        this.$store.commit("addError", error)
      }
      this.$router.push("login")
    }
  }
}
</script>
