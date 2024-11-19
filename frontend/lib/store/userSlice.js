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
            handleError(error, get)
        }
    },

    //logout
    logOutAction: async () => {
        try {
            console.log('Attempting logout'); // Debug log
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/logout`, {
                withCredentials: true // Ensure credentials are sent
            })
            
            console.log('Logout response:', data); // Log server response
            
            set({ isAuthenticated: false, user: null })
            get().setMessage(data.message)
            get().setIsloading(false)
        } catch (error) {
            console.error('Logout error:', error); // Log any errors
            handleError(error, get)
        }
    }

})