'use strict'

const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'BONAS',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'BONAS project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ]
  },
  /*
  ** Global CSS
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth: {
    endpoints: {
      login: { url: '/api/login', method: 'post', propertyName: false },
      logout: { url: '/api/logout', method: 'get', propertyName: false },
      user: { url: '/api/dirk', method: 'get', propertyName: false }
    },
    fetchUserOnLogin: true,
    token: false,
    cookie: [
      {
        name: 'adonis-session',
        options: {
          path: '/'
        }
      },
      {
        name: 'adonis-session-values',
        options: {
          path: '/'
        }
      }
    ]
  },
  css: ['~/assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#744d82' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources')
}
