import express from "express"
import { googleSignUp, logOut } from "../controllers/userController.js"
import { movieList } from "../controllers/movieController.js"

const router=express.Router()

//user
router.post("/signin",googleSignUp)
router.get("/logout",logOut)



//movies
router.get("/movie-list",movieList)

export default router