
require("dotenv").config();


const express=require("express");
const app= express();


const mongoose=require("mongoose");


const workoutRoutes=require("./routes/workout")
const userRoutes=require("./routes/user")

const cors=require("cors");

app.use(express.json());

app.use(cors());



// const PORT=process.env.PORT;


app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);


mongoose.connect(process.env.MONG_URL)
.then(()=>{
    console.log("Database is connected");
})
.catch((e)=>{
    console.log(e);
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`)
});