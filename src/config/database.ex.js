module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: '',
    database: '',
    define: {
        timestamps: true, // created_at, updated_at
        underscored: true
    }
}