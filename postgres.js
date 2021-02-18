const Client = require('pg').Client

const client = new Client({
    //connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/quiz_backend_development',
    user: "ojnmromkpldvyn",
    password: "9d79e92830c3c07deea23c77fe6173a9f34787d8daf257a571ce296468b205fd",
    database: "dqjvihofijr55",
    port: 5432,
    host: "ec2-52-22-161-59.compute-1.amazonaws.com",
    ssl: true
})
console.log(process.env.DATABASE_URL);

module.exports = client;
