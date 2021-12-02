'use strict'
const store = require('./store')

const signUpSuccess = function (responseData) {
  // tell the user it was successful
  $('#perk-display').text('Signed up successfully!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#perks-display').removeClass()
  $('#perk-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign up failed')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  // print the error
  console.error('error is', error)
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  $('#perk-display').text('Signed In successfully')
  $('#perk-display').removeClass()
  $('#perk-display').addClass('text-success')
  $('form').trigger('reset')
  // $('#after-sign-in').show()
  // $('#before-sign-in').hide()
}

const signInFailure = (error) => {
  $('#error-message').text('Sign In failed')

  $('#error-message').removeClass()

  $('#error-message').addClass('text-danger')
  console.error('error is' + error)
}

const changePasswordSuccess = (responseData) => {
// tell the user it was successful
  $('#perk-display').text('Changed password successfully!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#perk-display').removeClass()
  $('#perk-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const changePasswordFailure = (error) => {
  $('#error-message').text('Sign out failed')

  $('#error-message').removeClass()

  $('#error-message').addClass('text-danger')
  console.error('error is' + error)
}
const signOutSuccess = (responseData) => {
  store.user = responseData.user
  $('#perk-display').text('Signed Out successfully')
  $('#perk-display').removeClass()
  $('#perk-display').addClass('text-success')
  $('form').trigger('reset')
  // $('#after-sign-in').hide()
  // $('#before-sign-in').show()
}

const signOutFailure = (error) => {
  $('#error-message').text('Sign In failed')

  $('#error-message').removeClass()

  $('#error-message').addClass('text-danger')
  console.error('error is' + error)
}

const { onCreatePerk } = require('./events')

const onIndexPerkSuccess = function (responseData) {
  const perks = responseData.perks
  console.log(responseData)
  let perkHtml = ''

  perks.forEach(perk => {
    perkHtml += `
    <div>
    <h4> Perk Title: ${perk.title}</h4>
    <p> Perk Description: ${perk.text}</p>
    <p> ID: ${perk._id}</p>
    <p> Perk Owner: ${perk.owner}</p>
    <P>___________________________________</P>
    </div>
    `
  })
  $('#perk-display').html(perkHtml)
}
// const onIndexPerkOwnerSuccess = function (responseData) {
//   const perks = responseData.perks
//   console.log(responseData)
//   let perkHtml = ''

//   perks.forEach(perk => {
//     perkHtml += `
//     <div>
//     <h4> Title: ${perk.title}</h4>
//     <p> Author: ${perk.text}</p>
//     <p> ID: ${perk._id}</p>
//     <P>___________________________________</P>
//     </div>
//     `
//   })
//   $('#books-display').html(perkHtml)
// }

const onShowPerkSuccess = function (responseData) {
  const perk = responseData.perk
  console.log(responseData)

  const perkHtml = `
  <div>
  <h4> Perk Title: ${perk.title}</h4>
  <p> Perk Description: ${perk.text}</p>
  <p> ID: ${perk._id}</p>
  <P>___________________________________</P>
  </div>
  
  `
  $('#perk-display').html(perkHtml)
  $('form').trigger('reset')
}
const onDestroyPerkSuccess = function (responseData) {
  $('#perk-display').text('The perk was Deleted Successfully')
  $('#perk-display').addClass('text-success')
}

const onUpdatePerkSuccess = function (responseData) {
  $('#perk-display').text('The perk was updated Successfully')
  $('#perk-display').addClass('text-success')
}

const onCreatePerkSuccess = function (responseData) {
  $('#perk-display').text('The perk was created Successfully')
  $('#perk-display').addClass('text-success')
  $('form').trigger('reset')
}

const onError = function (err) {
  console.error(err)

  $('#error-message').text('Something went wrong, please try again.')
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
  // onIndexPerkOwnerSuccess,
  onCreatePerk,
  onError,
  onShowPerkSuccess,
  onDestroyPerkSuccess,
  onUpdatePerkSuccess,
  onCreatePerkSuccess

}
