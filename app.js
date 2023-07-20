const express= require('express');
const errorMiddleware= require("./middleware/error");

const app= express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

const patient= require("./routes/patientRoutes");
const time= require("./routes/delayTimingRoutes");

app.use("/api/v1",patient);
app.use("/api/v1",time);

//Middleware for errors
app.use(errorMiddleware);

module.exports= app