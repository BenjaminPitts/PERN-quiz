const Client = require('pg').Client

const client = new Client({
    connectionString: process.env.DATABASE_URL?ssl=true || 'postgresql://localhost:5432/quiz_backend_development',
})
console.log(process.env.DATABASE_URL);

module.exports = client;
