const mongoose= require('mongoose');


const patientDetailSchema= new mongoose.Schema({
    id:{type: Number},
    category:{type: String},
    details:{
        date:{type:String},
        slot:{type:String},
        name:{type:String},
        phone:{type:String},
        problem:{type:String},
        address:{type:String},
    }
});

module.exports = mongoose.model("Patient",patientDetailSchema);