const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

router.get('/', (req, res) => {
    postgres.query('SELECT * FROM quiz ORDER BY random() LIMIT 1;', (err, results) => {
        res.json(results.rows)
    });
});

router.post('/', (req, res) => {
    postgres.query(`INSERT INTO quiz (question, answer, answer_char, point_value) VALUES ('${req.body.question}', '${req.body.answer}', '${req.body.answer_char.toUpperCase()}',${req.body.point_value})`, (err, results) => {
        postgres.query('SELECT * FROM quiz ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM quiz WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM quiz ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/:id', (req, res) => {
    postgres.query(`UPDATE quiz SET question = '${req.body.question}', answer = '${req.body.answer}', answer_char = '${req.body.answer_char.toUpperCase()}', point_value = ${req.body.point_value} WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM quiz ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router;

// CREATE TABLE quiz (id serial, question text, answer text, answer_char varchar(1), point_value int);
//
// INSERT INTO quiz (question, answer, answer_char, point_value) VALUES ('Which of the following type of variable is visible only within a function where it is defined?','A- global variable B- local variable C- Both of the above. D- None of the above.', 'B', 200);
// INSERT INTO quiz (question, answer, answer_char, point_value) VALUES ('Which built-in method returns the calling string value converted to upper case?', 'A- toUpperCase() B- toUpper() C- changeCase(case) D- None of the above.','A', 100);
// INSERT INTO quiz (question, answer, answer_char, point_value) VALUES ('Which of the following function of Array object joins all elements of an array into a string?', 'A- concat() B- join() C- pop() D- map()', 'B', 300);
// INSERT INTO quiz (question, answer, answer_char, point_value) VALUES ('Which of the following function of Array object returns true if at least one element in this array satisfies the provided testing function?', 'A- reverse() B- shift() C- slice() D- some()', 'D', 300);
// INSERT INTO quiz (question, answer, answer_char, point_value) VALUES ('Which was the first browser to support JavaScript?', 'A- Mozilla Firefox B- Netscape C- Google Chrome D- IE', 'B', 100);
// INSERT INTO quiz (question, answer, answer_char, point_value) VALUES ('Inside which HTML element do we put the JavaScript?', 'A. <javascript> B.<script> C. <js> D. <scripting>', 'B', 100);
// INSERT INTO quiz (question, answer, answer_char, point_value) VALUES ('What will be the command to print the number of characters in the string “quiz.js”?', 'A- document.write(“quiz.js”.len) B- document.write(sizeof(“quiz.js”)) C- document.write(“quiz.js”.length); D- document.write(lenof(“quiz.js”))', 'C', 200);
// INSERT INTO quiz (question, answer, answer_char, point_value) VALUES ('In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?', 'A- Integer(value) B- ifInteger(value) C- isInteger(value) D- ifinteger(value)', 'C', 300);
