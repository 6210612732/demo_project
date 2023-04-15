let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// patient model
let patientSchema = require('../models/Patient')

// create patient
router.route('/create-patient').post((req, res, next) => {
    patientSchema.create(req.body, (error, data) => {
        if(error) { 
            return  next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    })
})

// Read patient 
router.route('/').get((req, res) => {
    patientSchema.find((error,data) => {
        if(error) {
            return next(error);
        } else {
            res.json(data);

        }
    })
})

// Get single patient 
router.route('/edit-patient/:id').get((req, res) => {
    patientSchema.findById(req.params.id, (error, data) => {
        if(error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Update patient
router.route('/update-patient/:id').put((req, res, next) => {
    patientSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body

    }, (error,data) => {
        if(error) {
            return next(error);
            console.log(error);
        } else {
            res.json(data);
            console.log('patient updated successfully');
        }
    })
})

// Delete patient
router.route('/delete-patient/:id').delete((req, res, next) => {
    patientSchema.findByIdAndRemove(req.params.id, (error,data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;