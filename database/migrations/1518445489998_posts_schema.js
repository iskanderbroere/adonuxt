'use strict'

const Schema = use('Schema')

class PostsSchema extends Schema {
  up() {
    this.create('posts', (table) => {
      table.increments()
      table.string('title')
      table.text('body')
      table.integer('user_id').unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('posts')
  }
}

module.exports = PostsSchema
