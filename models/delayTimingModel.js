const mongoose= require('mongoose');

const delayTimingSchema= new mongoose.Schema({
    id:{type: Number},
    startTime:{type: String},
    delayTime:{type: String},
    startDate:{type: String},
    endDate:{type: String}
});

module.exports = mongoose.model("Time",delayTimingSchema);
