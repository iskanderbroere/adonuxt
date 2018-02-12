'use strict'

const Post = use('App/Models/Post')

class PostController {
  async index({ view }) {
    /**
     * Fetch all posts inside our database.
     *
     * ref: http://adonisjs.com/docs/4.0/lucid#_all
     */
    const posts = await Post.all()

    /**
     * Render the view 'posts.index'
     * with the posts fetched as data.
     *
     * ref: http://adonisjs.com/docs/4.0/views
     */
    console.log(posts.toJSON())
    return posts.toJSON()
  }

  async store({ session, request, response }) {
    /**
     * Getting needed parameters.
     *
     * ref: http://adonisjs.com/docs/4.0/request#_only
     */
    const data = request.only(['title', 'body'])

    /**
     * Validating our data.
     *
     * ref: http://adonisjs.com/docs/4.0/validator
     */
    // const validation = await validate(data, {
    //   title: 'required',
    //   body: 'required',
    // })

    /**
     * If validation fails, early returns with validation message.
     */
    // if (validation.fails()) {
    //   session
    //     .withErrors(validation.messages())
    //     .flashAll()

    //   return response.redirect('back')
    // }

    /**
     * Creating a new post into the database.
     *
     * ref: http://adonisjs.com/docs/4.0/lucid#_create
     */
    const newPost = await Post.create(data)
    console.log('newPost: ', newPost)
    // return response.redirect('/')
  }

  async update({ params, session, request, response }) {
    /**
     * Getting needed parameters.
     *
     * ref: http://adonisjs.com/docs/4.0/request#_only
     */
    const data = request.only(['title', 'body'])

    /**
     * Validating our data.
     *
     * ref: http://adonisjs.com/docs/4.0/validator
     */
    // const validation = await validate(data, {
    //   title: 'required',
    //   body: 'required',
    // })

    /**
     * If validation fails, early returns with validation message.
     */
    // if (validation.fails()) {
    //   session
    //     .withErrors(validation.messages())
    //     .flashAll()

    //   return response.redirect('back')
    // }

    /**
     * Finding the post and updating fields on it
     * before saving it to the database.
     *
     * ref: http://adonisjs.com/docs/4.0/lucid#_inserts_updates
     */
    const post = await Post.findOrFail(params.id)
    post.merge(data)
    await post.save()

    return response.redirect('/')
  }

  async delete({ params, response }) {
    /**
     * Finding the post and deleting it
     *
     * ref: http://adonisjs.com/docs/4.0/lucid#_deletes
     */
    const post = await Post.findOrFail(params.id)
    await post.delete()

    return response.redirect('/')
  }
}

module.exports = PostController
