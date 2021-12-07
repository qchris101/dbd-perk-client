// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./events')
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})

$(() => {
  // $('#books-index').on('click', authEvents.onIndexPerksOwned)
  $('#perks-index').on('click', authEvents.onIndexPerks)
  $('#perks-show').on('submit', authEvents.onShowPerk)
  $('#perks-delete').on('submit', authEvents.onDestroyPerk)
  $('#perks-update').on('submit', authEvents.onUpdatePerk)
  $('#perks-new').on('submit', authEvents.onCreatePerk)
})
