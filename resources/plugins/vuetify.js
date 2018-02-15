import Vue from "vue"
import Vuetify from "vuetify"
import colors from "vuetify/es5/util/colors"

Vue.use(Vuetify, {
  theme: {
    primary: colors.grey.base,
    secondary: colors.pink.base,
    accent: colors.pink.darken4,
    error: colors.red.accent4,
    warning: colors.yellow.accent4,
    info: colors.blue.base,
    success: colors.green.base
  }
})
