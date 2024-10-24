'use client'

import { Clapperboard, Heart, House, LogOut, Newspaper, Settings, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LateralMenu() {
    const pathname = usePathname()
    
    return (
        <header className="h-screen p-10 space-y-20 border-r border-gray-200 border-opacity-50">
            <h1 className="font-bold text-2xl text-orange-200">MovieIt.</h1>

            <nav className="space-y-10">
                <Link href={'/'} className={`flex items-center gap-2 font-bold hover:opacity-80 ${pathname === '/' ? 'text-orange-200' : 'text-gray-200'}`}><House className="size-6" />Início</Link>
                <Link href={'/watchlist'} className={`flex items-center gap-2 font-bold hover:opacity-80 ${pathname === '/watchlist' ? 'text-orange-200' : 'text-gray-200'}`}><Heart className="size-6" />Watchlist</Link>
                <Link href={'/timeline'} className={`flex items-center gap-2 font-bold hover:opacity-80 ${pathname === '/timeline' ? 'text-orange-200' : 'text-gray-200'}`}><Clapperboard className="size-6" />Linha do tempo</Link>
                <Link href={'/reviews'} className={`flex items-center gap-2 font-bold hover:opacity-80 ${pathname === '/reviews' ? 'text-orange-200' : 'text-gray-200'}`}><Newspaper className="size-6" />Resenha</Link>
                <Link href={'/connections'} className={`flex items-center gap-2 font-bold hover:opacity-80 ${pathname === '/connections' ? 'text-orange-200' : 'text-gray-200'}`}><Users className="size-6" />Conexões</Link>
                <Link href={'/settings'} className={`flex items-center gap-2 font-bold hover:opacity-80 ${pathname === '/settings' ? 'text-orange-200' : 'text-gray-200'}`}><Settings className="size-6" />Configurações</Link>
                <Link href={'/exit'} className={`flex items-center gap-2 font-bold hover:opacity-80 ${pathname === '/exit' ? 'text-orange-200' : 'text-gray-200'}`}><LogOut className="size-6" />Sair</Link>
            </nav>
        </header>
    )
};
