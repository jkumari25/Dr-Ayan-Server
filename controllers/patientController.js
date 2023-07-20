const catchAsyncErrors= require("../middleware/catchAsyncError");
const Patient= require("../models/patientDetailsModel");

// Post Patient Details:-
exports.patientDetailForm= catchAsyncErrors(async(req,res,next) => {

    const {id, category,details,date,slot,name,phone,problem,address}= req.body;

    const patient= new Patient({
        id,category,details,date,slot,name,phone,problem,address
    });

    await patient.save();

    res.status(201).json({
        success: true,
        patient
    })

});

// GET Patient Details Data :-
exports.getPatientDetailForm= catchAsyncErrors(async(req,res,next) => {
    const patient= await Patient.find();
  
    res.status(200).json({
       success:true,
       patient,
    })
  })