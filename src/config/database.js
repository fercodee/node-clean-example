module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: '5433',
    username: 'postgres',
    password: 'dev1724',
    database: 'sequelize_node',
    define: {
        timestamps: true, // created_at, updated_at
        underscored: true
    }
}