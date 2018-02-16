"use strict"
const resolve = require("path").resolve

module.exports = {
  mode: "universal",
  head: {
    title: "Adonuxt",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Adonuxt project"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Space+Mono|Material+Icons|Bungee"
      }
    ]
  },
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],
  axios: {
    baseURL: "/api",
    debug: true
  },
  auth: {
    endpoints: {
      login: { url: "/login", method: "post", propertyName: "token" },
      logout: { url: "/logout", method: "get", propertyName: false },
      user: { url: "/user", method: "get", propertyName: false }
    },
    fetchUserOnLogin: true,
    token: {
      type: "Bearer",
      name: "token"
    },
    cookie: {
      name: "token",
      options: {
        path: "/"
      }
    }
  },
  router: {
    middleware: ["auth"]
  },
  plugins: ["~/plugins/vuetify.js", "~/plugins/axios"],
  build: {
    vendor: ["~/plugins/vuetify.js", "~/plugins/axios"],
    extractCSS: true
  },
  css: ["~/assets/css/main.styl"],
  loading: { color: "#744d82" },
  srcDir: resolve(__dirname, "..", "resources")
}
