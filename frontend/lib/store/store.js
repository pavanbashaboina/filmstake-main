import { create } from "zustand";
import { persist } from "zustand/middleware"
import { notificationSlice } from "./notificationSlice";
import { userSlice } from "./userSlice";
import { movieSlice } from "./movieSlice";

const manageStore = create(
    persist((set, get) => ({
        ...notificationSlice(set),
        ...userSlice(set,get),
        ...movieSlice(set,get)
    }),
        {
            name: "app-storage"
        }
    )
)

export default manageStore