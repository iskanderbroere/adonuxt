<template>
  <v-snackbar
    :timeout="5000"
    multi-line
    v-model="snackbar"
  >
    {{ error }}
    <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    snackbar: true
  })
}
</script>
