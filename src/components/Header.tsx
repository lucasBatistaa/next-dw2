'use client'

import { BellRing, Search } from "lucide-react";
import Image from "next/image";

import UserImage from '../../public/assets/user.png'
import { useState } from "react";
import { useUserStore } from "@/store/userStore";
import Button from "./button";

export default function Header() {
    const user = useUserStore((state) => state.user)

    const [email, setEmail] = useState('lucas.batista@gmail.com')
    const [password, setPassword] = useState('123')
    const [name, setName] = useState('Lucas1')

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/user/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email, password, name
                })
            })

            const data = await response.json()

            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex items-center justify-between">
            <div className="w-[400px] flex items-center justify-between gap-2 px-5 rounded-[40px] border border-gray-200">
                <input type="text" placeholder="Pesquise um filme" className="flex-1 py-4 bg-transparent text-gray-200 focus:outline-none placeholder:text-gray-200" />

                <Search className="size-6 text-gray-200 hover:opacity-90 cursor-pointer" />
            </div>

            {
                user ? (
                    <div className="flex items-center gap-10">
                        <BellRing className="size-6 text-orange-200 hover:opacity-90 cursor-pointer" />

                        <div className="flex items-center gap-[10px]">
                            <Image src={UserImage} alt="Ícone do usuário" />

                            <h1 className="font-bold text-orange-200">{user?.name}</h1>
                        </div>
                    </div>
                ) : (
                    <div onClick={handleLogin} className="flex items-center gap-[10px]">
                        <Image src={UserImage} alt="Ícone do usuário" />

                        <Button title="Login" />
                    </div>
                )
            }
        </div>
    )
};