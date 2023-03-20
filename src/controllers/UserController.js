const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();
        
        return res.json(users);
    },
    async store(req, res) {
        const { name, email } = req.body;
        // ? O sequelize nos dará acesso a diversos métodos que executam operações no DB atráves do nosso Model:
        const user = await User.create({ name, email });

        return res.json(user);
    }
}