const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize: connection // ? vc pode passar o sequelize direto
        })
    }

    static associate(models) {
        // ! No caso do hasMany, tem quem ser a coluna que está na outra tabela do relcionamento
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
        this.belongsToMany(models.Tech, {
            foreignKey: 'user_id',
            through: 'users_techs', // ! Coloque no singular
            as: 'techs',
        });  
    }
}

module.exports = User;