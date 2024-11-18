import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";


const handleError = (error, get) => {
    get().setErrorMessage(error.response ? error.response.data.message : error.message)
    get().setIsloading(false)
}


export const userSlice = (set, get) => ({
    user: null,
    isAuthenticated: false,


    //google signin
    googleSignIn: async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            const idToken = await result.user.getIdToken()

            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/signin`, { idToken }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })

            set({ user: data, isAuthenticated: true })
            get().setMessage(data.message)
            get().setIsloading(false)

        } catch (error) {
            handleError(error,get)
        }
    }
})