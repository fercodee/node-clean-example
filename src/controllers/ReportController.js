const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = {
    async show(req, res) {
        /**
         * Encontrar todos os usuários que tem o email com @gmail.com
         * Desses usuários, buscar todos que moram na rua Alameda dos Anjos
         * Desses usuários, buscar as tecnologias que começam com React
         * Obs: note que o include são filtros 
         */
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua Alameda dos anjos' } },
                {
                    association: 'techs',
                    required: false, // filro não obrigátorio
                    where: {
                        name: {
                            [Op.like]: 'React%'
                        }
                    }
                }

            ] // ? mais de um relacionamento, usa um array e nao objeto
        });

        return res.json(users);
    }
}

/**
 * [Op.iLike] => quando coloca o colchete ao redor de uma variável, o javascript atribuira o valor da variável como a chave do objeto
 */