const loginValidation = (req, res, next) => {
    const { username, password } = req.body

    if(!username || !password ) {
        return res.status(400).json({ error: 'Debes llenar todos los campos' })
    }

    next()
}

module.exports = loginValidation