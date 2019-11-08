import { Model } from '@vuex-orm/core'
import Post from './Post'

export default class User extends Model {
  static entity = 'users'

  static primaryKey = 'id'

  static fields () {
    return {
      id: this.increment(),
      first_name: this.string(''),
      last_name: this.string(''),
      email: this.string(''),
      slug: this.string(''),
      posts: this.hasMany(Post, 'user_id')
    }
  };

  /**
   * Get full name of the user.
   */
  get fullName () {
    return `${this.first_name} ${this.last_name}`
  }

  static apiConfig = {
    actions: {
      show (slug) {
        return this.get(`users/${slug}?expand=published`)
      }
    }
  }
}
