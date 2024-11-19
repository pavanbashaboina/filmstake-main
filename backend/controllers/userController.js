import admin from "../firebase-admin.js";
import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import { generateToken } from "../middleware/generateToken.js";
import User from "../models/userModel.js"
import { generateUsername } from "../utils/helper.js";

export const googleSignUp = catchAsyncErrors(async (req, res, next) => {
    const { idToken } = req.body

    const decodedUser = await admin.auth().verifyIdToken(idToken)
    const { email, name, picture } = decodedUser

    let userFound = await User.findOne({ "personal_info.email": email })

    const username = await generateUsername(User, name)

    if (!userFound) {
        userFound = await User.create({
            personal_info: {
                fullname: name,
                email,
                profile_img: picture,
                username
            }
        })
    }

    await generateToken(res, userFound._id)

    res.status(200).json({
        message: `Welcome ${userFound.personal_info.fullname}`,
        success: true,
        id: userFound._id,
        profile_img: userFound.personal_info.profile_img,
        username: userFound.personal_info.username
    })

})


export const logOut = catchAsyncErrors(async (req, res, next) => {
    res.cookie("tokenid", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict"
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})