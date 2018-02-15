<template>
  <v-container>
    <p>{{ posts }}</p>
    <a @click.prevent="createPost">hi</a>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      return await $axios.$get("/posts")
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    async createPost() {
      try {
        return await this.$axios.$post("/posts", {
          title: "Harm",
          body: "Whatever"
        })
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
