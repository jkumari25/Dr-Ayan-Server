const express= require('express');
const { delayTimingForm, getDetailTimingForm } = require('../controllers/delayTimingController');


const router= express.Router();

router.route("/delay").post(delayTimingForm);
router.route("/getdelay").get(getDetailTimingForm);

module.exports= router;