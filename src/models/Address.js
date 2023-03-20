const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER
        }, {
            sequelize: sequelize
        });
    }

    // ! associate é necessário para criação do campo do relacionamento entre as tabelas
    static associate(models) {
        // ! belongsTo -> pertece a
        // ! foreignKey -> você deve passar o nome do campo da tabela que conterá a FK
        // ! as -> o nome a quem pertence aquele campo (você escolhe o nome)
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

module.exports = Address;