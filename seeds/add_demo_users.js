'use strict'

const User = require('../models/User')

module.exports.seed = (knex, Promise) =>
  new User({
    name: 'Scott',
    email: 'a@b.com',
  }).save()
