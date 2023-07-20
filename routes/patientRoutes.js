const express= require('express');
const { patientDetailForm, getPatientDetailForm } = require('../controllers/patientController');


const router= express.Router();

router.route("/patientdetail").post(patientDetailForm);
router.route("/getpatientdetail").get(getPatientDetailForm);

module.exports= router;