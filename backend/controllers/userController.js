const userModel = require('../models/user.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const loginUser = async(req, res) => {
    const { username, password } = req.body

    if(!username || !password) {
        return res.json({ message: 'Debe completar todos los campos' })
    }

    const user = await userModel.findOne({ username })

    if(!user) {
        return res.status(400).json({ message: 'El nombre de usuario no existe' })
    }

    const correctPassword = await bcrypt.compare(password, user.password)

    if(!correctPassword) {
        return res.status(403).json({ message: 'Contraseña incorrecta' })
    }

    jwt.sign({ id: username }, process.env.JWT_TOKEN, (err, token) => {
        if(err) {
            return res.status(400).json({ message: 'No se pudo generar el token' })
        }

        console.log(token)
        return res.status(201).json({ token })
    })
}

const authenticate = async(req, res) => {
    const { userToken } = req

    const user = await userModel.findOne({ username: userToken })

    if(!user) {
        return res.status(400).json({ message: 'No se encontro ningun usuario' })
    }

    const userInfo = {
        id: user._id,
        username: user.username
    }

    return res.status(200).json({ userInfo })
}

module.exports = {
    loginUser,
    authenticate
}