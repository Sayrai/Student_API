'use strict';
var mongoose = require('mongoose'),
    // Try students as studentInfo later
    Student = mongoose.model('Student');

exports.list_all_studentInfo = function(req, res) {
    Student.find({}, function(err, Student) {
        var response = {
            statusCode: 200,
            status: true,
            data: Student
        };
        if (err)
            res.send(err);

        res.json(response);
    });
};

exports.create_a_studentInfo = function(req, res) {
    var new_student = new Student(req.body);
    new_student.save(function(err, student) {
        // if (err) {
        //     handleError(res, "Invalid user input", "Must provide a name.", 400);
        // }
        if (err) {
            res.send(err)
        } else {
            res.send(student);
        }

    });
};

exports.read_a_studentInfo = function(req, res) {
    Student.findById(req.params.studentId, function(err, student) {
        if (err)
            res.send(err);
        res.json(student);
    });
};

exports.update_a_studentInfo = function(req, res) {
    console.log(req.params.id);
    Student.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true }, function(err, student) {
        if (err) {

            res.send(err);
        } else {

            res.json(student);
        }


    });
};

exports.delete_a_studentInfo = function(req, res) {
    Student.remove({ _id: req.params.id }, function(err, student) {
        if (err)
            res.send(err);
        res.json({ message: 'Information  successfully deleted' });
    });
};