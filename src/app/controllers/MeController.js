const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class Courseontroller {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new Courseontroller();
