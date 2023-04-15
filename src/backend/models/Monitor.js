const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let monitorSchema = new Schema({
    device_id: {
        type: String
    },
    pulse: {
        type: String
    },
    upper_press: {
        type: String
    },
    lower_press: {
        type: String
    },
    oxy: {
        type: String
    },
    timestamp: {
        type: String
    },
}, {
    collection: "monitors"
})

module.exports = mongoose.model('Monitor', monitorSchema);
