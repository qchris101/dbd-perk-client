const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onIndexPerks = () => {
  api.index()
    .then(ui.onIndexPerkSuccess)
    .catch(ui.onError)
}
// const onIndexPerksOwned = () => {
//   api.index()
//     .then(ui.onIndexPerkOwnerSuccess)
//     .catch(ui.onError)
// }

const onShowPerk = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.perk.id

  api.show(id)
    .then(ui.onShowPerkSuccess)
    .catch(ui.onError)
}

const onDestroyPerk = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.perk.id

  api.destroy(id)
    .then(ui.onDestroyPerkSuccess)
    .catch(ui.onError)
}

const onUpdatePerk = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.perk.id

  api.update(id, formData)
    .then(ui.onUpdatePerkSuccess)
    .catch(ui.onError)
}

const onCreatePerk = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.create(formData)
    .then(ui.onCreatePerkSuccess)
    .catch(ui.onError)
}

const onDynamicDestroyPerk = (event) => {
  const id = $(event.target).data('id')

  api.destroy(id)
    .then(ui.onDestroyPerk)
    .catch(ui.onError)
}
const onDynamicUpdatePerk = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).data('id')

  api.update(id, formData)
    .then(ui.onUpdatePerkSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onIndexPerks,
  // onIndexPerksOwned,
  onShowPerk,
  onDestroyPerk,
  onUpdatePerk,
  onCreatePerk,
  onDynamicDestroyPerk,
  onDynamicUpdatePerk

}
