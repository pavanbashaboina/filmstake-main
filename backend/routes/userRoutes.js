import express from "express"
import { googleSignUp } from "../controllers/userController.js"

const router=express.Router()

router.post("/signin",googleSignUp)

export default router