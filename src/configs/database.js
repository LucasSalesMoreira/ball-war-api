module.exports = {
    development: {
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: null,
        database: 'ball_war',
        dialect: 'mysql',
        charset: 'utf8',
        dialectOptions: {
            bigNumberStrings: true,
        },
        define: {
            timestamps: true,
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    },
    test: {
        host: process.env.host_db,
        port: 3306,
        username: 'root',
        password: process.env.password_db,
        database: process.env.database,
        dialect: 'mysql',
        charset: 'utf8',
        dialectOptions: {
            bigNumberStrings: true,
        },
        define: {
            timestamps: true,
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    },
    production: {
        host: process.env.host_db,
        port: 3306,
        username: 'root',
        password: process.env.password_db,
        database: process.env.database,
        dialect: 'mysql',
        charset: 'utf8',
        dialectOptions: {
            bigNumberStrings: true,
        },
        define: {
            timestamps: true,
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    },
};