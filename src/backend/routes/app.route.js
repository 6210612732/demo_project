let mongoose = require('mongoose'),
    app = require('express'),
    router = app.Router();
const bcrypt = require('bcrypt');

let doctorSchema = require('../models/Doctor')
let patientSchema = require('../models/Patient')


// Get single patient 
router.route('/authen').post((req, res) => {
    doctorSchema.findOne({ email: req.body.email}, (error, data)=> {
        if(error) {
            return next(error);
        } else {
            if(data === null){
            console.log("email incorrect");
            return 0;
            }
            else{
                //console.log(req.body.password + "  asdsd  " + data.password);
                const result = bcrypt.compareSync(req.body.password, data.password );
                if(result == true){
                    console.log("login success")
                    res.json("login success");
                }
                else{
                    console.log("password incorrect");
                    res.json("password incorrect");
                }
            }
        }
    })
})

// Read patient 
router.route('/').get((req, res) => {
    console.log("sda");
    doctorSchema.find((error,data) => {
        if(error) {
            return next(error);
        } else {
            res.json(data);

        }
    })
})

module.exports = router;