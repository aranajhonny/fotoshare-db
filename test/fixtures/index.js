'use strict'

const uuid = require('uuid-base62')

const fixtures = {
  getImage () {
    return {
      descripcion: 'am #awesome picture',
      url: `https://platzigram.test/${uuid.v4()}.jpg`,
      likes: 0,
      liked: false,
      user_id: uuid.uuid()
    }
  },

  getImages (n) {
    let images = []
    while (n-- > 0) {
      images.push(this.getImage())
    }
    return images
  }
}

module.exports = fixtures
