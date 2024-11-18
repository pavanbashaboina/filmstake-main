import { create } from "zustand";
import { persist } from "zustand/middleware"
import { notificationSlice } from "./notificationSlice";
import { userSlice } from "./userSlice";

const manageStore = create(
    persist((set, get) => ({
        ...notificationSlice(set),
        ...userSlice(set,get)
    }),
        {
            name: "app-storage"
        }
    )
)

export default manageStore