const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');


class Courseontroller {

    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course =>{
                res.render('course/show', { 
                    course: mongooseToObject(course)
                });
            })
            .catch(next);
    }
}

module.exports = new Courseontroller();
