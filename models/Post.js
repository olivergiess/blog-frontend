import moment from 'moment'

import { Model } from '@vuex-orm/core'
import User from '@/models/User'

export default class Post extends Model {
  static entity = 'posts'

  static primaryKey = 'id'

  static fields () {
    return {
      id: this.increment(),
      title: this.string(''),
      cover_image: this.string(''),
      body: this.string(''),
      publish_at: this.string(''),
      updated_at: this.string(''),
      user: this.belongsTo(User, 'user_id'),
      user_id: this.number(null)
    }
  };

  get formattedPublishAt () {
    return moment(this.publish_at).format('Do MMM YYYY')
  };

  get formattedUpdatedAt () {
    return moment(this.updated_at).format('Do MMM YYYY')
  };

  static apiConfig = {
    actions: {
      all (slug) {
        return this.get(`/posts/published?expand=user&filter[user.slug]=${slug}`)
      },
      show (slug, id) {
        return this.get(`/posts/published/${id}?expand=user&filter[user.slug]=${slug}`)
      }
    }
  }
}
