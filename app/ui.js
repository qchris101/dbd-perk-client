'use strict'
const store = require('./store')
$('#perks-after-sign-in').hide()
$('#error-message').hide()
$('#after-sign-in').hide()
$('#perk-display').hide()
$('#perk-UiHandler').hide()
const signUpSuccess = function (responseData) {
  $('#handler-display').show()
  $('#handler-display').text('Signed up successfully!')
  $('#handler-display').addClass('text-success')
  setTimeout(() => {
    $('#handler-display').hide()
    $('#handler-display').text('')
    $('#handler-display').removeClass('text-success')
  }, 2000)
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#handler-display').show()
  $('#handler-display').text('Sign up failed, Try Again')
  $('#handler-display').addClass('text-danger')
  setTimeout(() => {
    $('#handler-display').hide()
    $('#handler-display').text('')
    $('#handler-display').removeClass('text-danger')
  }, 2000)
  $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  $('#handler-display').show()
  $('#handler-display').text('Signed In successfully')
  $('#handler-display').removeClass()
  $('#handler-display').addClass('text-success')
  setTimeout(() => {
    $('#handler-display').hide()
    $('#handler-display').text('')
    $('#handler-display').removeClass('text-success')
    $('#after-sign-in').fadeIn(2000)
    $('#perks-after-sign-in').fadeIn(2000)
    $('#login-Ui').fadeOut()
  }, 2000)
  $('form').trigger('reset')
}

const signInFailure = () => {
  $('#handler-display').show()
  $('#handler-display').text('Sign In failed, Incorrect Email or Password')
  $('#handler-display').addClass('text-danger')
  setTimeout(() => {
    $('#handler-display').hide()
    $('#handler-display').text('')
    $('#handler-display').removeClass('text-danger')
  }, 2000)
  $('form').trigger('reset')
}

const changePasswordSuccess = (responseData) => {
  $('#handler-display').show()
  $('#handler-display').text('Changed password successfully!')
  $('#handler-display').addClass('text-success')
  setTimeout(() => {
    $('#handler-display').hide()
    $('#handler-display').text('')
    $('#handler-display').removeClass('text-success')
  }, 2000)
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#handler-display').show()
  $('#handler-display').text('Password Change Failed!')
  $('#handler-display').addClass('text-danger')
  setTimeout(() => {
    $('#handler-display').hide()
    $('#handler-display').text('')
    $('#handler-display').removeClass('text-danger')
  }, 2000)
  $('form').trigger('reset')
}
const signOutSuccess = (responseData) => {
  // store.user = responseData.user
  $('#handler-display').show()
  $('#handler-display').text('Signed Out successfully')
  $('#handler-display').removeClass()
  $('#handler-display').addClass('text-success')
  setTimeout(() => {
    $('#handler-display').hide()
    $('#handler-display').text('')
    $('#handler-display').removeClass('text-success')
  }, 2000)
  $('#after-sign-in').fadeOut()
  $('#perks-after-sign-in').fadeOut()
  $('#perk-display').fadeOut()
  $('#login-Ui').fadeIn()
}

const signOutFailure = () => {
  $('#handler-display').show()
  $('#handler-display').text('Sign-Out Failed!')
  $('#handler-display').addClass('text-danger')
  setTimeout(() => {
    $('#handler-display').hide()
    $('#handler-display').text('')
    $('#handler-display').removeClass('text-danger')
  }, 2000)
}

const { onCreatePerk } = require('./events')

const onIndexPerkSuccess = function (responseData) {
  const perks = responseData.perks
  let perkHtml = ''

  perks.forEach(perk => {
    perkHtml += `
    <div>
    <h4> Perk: ${perk.title}</h4>
    <p> Description: ${perk.text}</p>
    <p> ID: ${perk._id}</p>
    <p> Perk Owner: ${perk.owner}</p>
    </div>
    `
  })
  $('#perk-display').fadeIn()
  $('#perk-display').html(perkHtml)
  $('#perk-UiHandler').show()
  $('#perk-UiHandler').text('Showing All Available Perks')
  $('#perk-UiHandler').removeClass()
  $('#perk-UiHandler').addClass('text-success')
  setTimeout(() => {
    $('#perk-UiHandler').hide()
    $('#perk-UiHandler').text('')
    $('#perk-UiHandler').removeClass('text-success')
  }, 2000)
}

const onShowPerkSuccess = function (responseData) {
  const perk = responseData.perk

  const perkHtml = `
  <div class = perk-style>
  <h4> Perk : ${perk.title}</h4>
  <p> Perk Description: ${perk.text}</p>
  <p> ID: ${perk._id}</p>
  <p> Perk Owner: ${perk.owner}</p>
  </div>
  
  `
  $('#perk-display').html(perkHtml)
  $('#perk-UiHandler').show()
  $('#perk-UiHandler').text('Showing Selected Perk')
  $('#perk-UiHandler').removeClass()
  $('#perk-UiHandler').addClass('text-success')
  setTimeout(() => {
    $('#perk-UiHandler').hide()
    $('#perk-UiHandler').text('')
    $('#perk-UiHandler').removeClass('text-success')
  }, 2000)
  $('form').trigger('reset')
}

const onDestroyPerkSuccess = function (responseData) {
  $('#perk-UiHandler').show()
  $('#perk-UiHandler').text('The perk was Deleted Successfully')
  $('#perk-UiHandler').removeClass()
  $('#perk-UiHandler').addClass('text-success')
  setTimeout(() => {
    $('#perk-UiHandler').hide()
    $('#perk-UiHandler').text('')
    $('#perk-UiHandler').removeClass('text-success')
  }, 2000)
  $('form').trigger('reset')
}

const onUpdatePerkSuccess = function (responseData) {
  $('#perk-UiHandler').show()
  $('#perk-UiHandler').text('The perk was updated Successfully')
  $('#perk-UiHandler').removeClass()
  $('#perk-UiHandler').addClass('text-success')
  setTimeout(() => {
    $('#perk-UiHandler').hide()
    $('#perk-UiHandler').text('')
    $('#perk-UiHandler').removeClass('text-success')
  }, 2000)
  $('form').trigger('reset')
}

const onCreatePerkSuccess = function (responseData) {
  $('#perk-UiHandler').show()
  $('#perk-UiHandler').text('The perk was created Successfully')
  $('#perk-UiHandler').removeClass()
  $('#perk-UiHandler').addClass('text-success')
  setTimeout(() => {
    $('#perk-UiHandler').hide()
    $('#perk-UiHandler').text('')
    $('#perk-UiHandler').removeClass('text-success')
  }, 2000)
  $('form').trigger('reset')
}

const onError = function () {
  $('#error-message').show()
  $('#error-message').text('Something went wrong, please try again.')
  $('#error-message').addClass('text-danger')
  setTimeout(() => {
    $('#error-message').hide()
    $('#error-message').text('')
    $('#error-message').removeClass('text-success')
  }, 2000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess,
  onIndexPerkSuccess,
  onCreatePerk,
  onError,
  onShowPerkSuccess,
  onDestroyPerkSuccess,
  onUpdatePerkSuccess,
  onCreatePerkSuccess

}
