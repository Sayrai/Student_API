'use strict';

var student = require('../controllers/schoolInfoController');

module.exports = function(app) {

    // studentInfo Routes
    app.route('/api/student')
        .get(student.list_all_studentInfo)
        .post(student.create_a_studentInfo);


    app.route('/api/student/:id')
        .get(student.read_a_studentInfo)
        .post(student.update_a_studentInfo)
        .delete(student.delete_a_studentInfo);

};