"use strict"

const resolve = require("path").resolve

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "BONAS",
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
        content: "BONAS project"
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
        href: "https://fonts.googleapis.com/css?family=Roboto|Material+Icons"
      }
    ]
  },
  /*
  ** Global CSS
  */
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],
  auth: {
    endpoints: {
      login: { url: "/api/login", method: "post", propertyName: false },
      logout: { url: "/api/logout", method: "get", propertyName: false },
      user: { url: "/api/user", method: "get", propertyName: false }
    },
    fetchUserOnLogin: true,
    token: {
      type: "Bearer",
      name: "token"
    },
    cookie: {
      name: "adonis-session",
      options: {
        path: "/"
      }
    }
  },
  build: {
    vendor: ["~/plugins/vuetify.js"],
    extractCSS: true
  },
  css: ["~/assets/css/main.styl"],
  loading: { color: "#744d82" },
  srcDir: resolve(__dirname, "..", "resources")
}
