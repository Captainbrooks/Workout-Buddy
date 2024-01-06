const express=require("express");
const router=express.Router();
const {createWorkout,
    getWorkouts,
    getAWorkout,
      deleteWorkout,
      updateWorkout
    }= require("../controllers/workoutController");

// require auth for all workout routes
    const requireAuth=require("../middlewares/requireAuth")


    router.use(requireAuth)

router.get("/",getWorkouts);


router.get("/:id",getAWorkout)

router.post("/", createWorkout)


router.delete("/:id",deleteWorkout);


router.patch("/:id",updateWorkout);








module.exports=router;