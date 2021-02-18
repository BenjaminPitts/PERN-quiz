const Client = require('pg').Client

const client = new Client({
    //connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/quiz_backend_development',
    user: "admin",
    password: "guest",
    database: "quiz",
    port: 5432,
    host: process.env.DATABASE_URL || 'postgresql://localhost:5432/quiz_backend_development',
    ssl: true
})
console.log(process.env.DATABASE_URL);

module.exports = client;
