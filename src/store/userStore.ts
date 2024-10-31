import { create } from "zustand";

interface User {
    id: number 
    name: string
    email: string
}

interface UserStore {
    user: User | null
    setUser: (user: User) => void
    exitUser: () => void
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
    exitUser: () => set({ user: null })
}))