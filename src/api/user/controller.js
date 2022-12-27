const Webauthn = require('webauthn')
const {v4:uuid } = require('uuid');
const {randomBytes} = require('crypto')

const webauthn = new Webauthn({
    origin: 'http://localhost:4000',
    rpName: 'Stranger Labs, Inc.',
  })




const getUser =async(req,res)=>{

    res.json({
        id:randomBytes(16).toString('base64'),
        name:"Tarfun",
        challenge:randomBytes(16).toString('base64')
    })
}

module.exports = {
    getUser
}