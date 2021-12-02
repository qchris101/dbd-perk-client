'use strict'
const config = require('../app/config')
const store = require('../app/store')

const signUp = (formData) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: formData
  })
}

const changePassword = (formData) => {
  return $.ajax({
    url: `${config.apiUrl}/change-password`,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const signOut = (formData) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const index = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/perk'
  })
}

const indexOwned = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/owned-perk',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const show = (id) => {
  return $.ajax({
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/perk/' + id
  })
}

const destroy = (id) => {
  return $.ajax({
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/perk/' + id
  })
}

const update = (id, FormData) => {
  return $.ajax({
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/perk/' + id,
    data: FormData
  })
}

const create = (FormData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/perk',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: FormData
  }
  )
}

module.exports = {
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  index,
  indexOwned,
  show,
  destroy,
  update,
  create
}
