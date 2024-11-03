'use client'

import { userAPI } from "@/services/api/user";
import Link from "next/link";
import { useState } from "react";

export default function LoginAccountPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleCreateAccount = async () => {
        if (username.trim() && email.trim() && password.trim() && confirmPassword.trim()) {
            if (password === confirmPassword) {

                await userAPI.create(username.trim(), email.trim(), password.trim())
            } else {
                console.log('Senhas não conferem!')
            }
        } else {
            console.log('Preencha todos os campos!')
        }
    }

    return (
        <main className="w-[280px] space-y-10 m-auto">
            <h1 className="font-bold text-4xl text-orange-200 text-center">MovieIt.</h1>

            <button className="h-10 w-full font-bold text-xs text-white bg-orange-200 hover:opacity-90 rounded-lg">Entrar com Google</button>

            <div className="flex justify-center items-center">
                <div className="border-b border-white w-full" />
                <p className="mx-4 text-white">ou</p>
                <div className="border-b border-white w-full" />
            </div>

            <form className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="font-bold text-xs text-brown-100">Username</label>
                    <input onChange={(event) => setUsername(event.target.value)} type="text" name="username" id="username" placeholder="Insira seu e-mail" className="w-full h-12 px-2 py-1 bg-gray-200 rounded-lg placeholder:text-black text-black focus:outline-none" required />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-bold text-xs text-brown-100">E-mail</label>
                    <input onChange={(event) => setEmail(event.target.value)} type="email" name="email" id="email" placeholder="Insira seu e-mail" className="w-full h-12 px-2 py-1 bg-gray-200 rounded-lg placeholder:text-black text-black focus:outline-none" required />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-bold text-xs text-brown-100">Senha</label>
                    <input onChange={(event) => setPassword(event.target.value)} type="password" name="password" id="password" placeholder="Insira sua senha" className="w-full h-12 px-2 py-1 bg-gray-200 rounded-lg placeholder:text-black text-black focus:outline-none" required />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password-confirm" className="font-bold text-xs text-brown-100">Confirmar senha</label>
                    <input onChange={(event) => setConfirmPassword(event.target.value)} type="password" name="password-confirm" id="password-confirm" placeholder="Confirme sua senha" className="w-full h-12 px-2 py-1 bg-gray-200 rounded-lg placeholder:text-black text-black focus:outline-none" required />
                </div>
            </form>

            <button onClick={handleCreateAccount} className="h-10 w-full font-bold text-xs text-white bg-orange-200 hover:opacity-90 rounded-lg" type="submit">Criar conta</button>

            <p className="text-justify text-xs text-white">Ao clicar em <span className="font-bold text-orange-200">“Criar conta”</span> ou  <span className="font-bold text-orange-200">“Entrar com Google”</span>, você afirma que concorda com os Termos e Serviços.</p>

            <p className="text-center text-xs text-white">Já possui conta? <Link href={'/account/create'} className="font-bold text-blue-100 underline hover:opacity-90">Entrar na conta!</Link></p>
        </main>
    )
};
