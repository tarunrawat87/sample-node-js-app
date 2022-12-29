// const Webauthn = require('webauthn')
const { v4: uuid } = require('uuid')
const helper = require('./helper')
// const webauthn = new Webauthn({
//   origin: 'http://localhost:4000',
//   rpName: 'Stranger Labs, Inc.'
// })

const registerUser = async (req, res) => {
  const initUser = {
    id: uuid(),
    name: req.body.name,
    password: req.body.pwd,
    email: req.body.email
  }
  await helper.createUser(initUser)
  res.status(201).json({
    success: true
  })
}

const loginUser = async (req, res) => {
  const response = await helper.performLogin(req.body)

  res.json(response)

  // res.json({
  //     id:randomBytes(16).toString('base64'),
  //     name:"Tarfun",
  //     challenge:randomBytes(16).toString('base64')
  // })
}

const getUserProfile = async (req, res) => {
  res.json(await helper.getProfile(req.query.email))
}

module.exports = {
  loginUser,
  registerUser,
  getUserProfile
}
