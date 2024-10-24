import { House } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface LinkNavigationMenuProps {
    children: ReactNode
    pathname: string
    title: string
}

interface IconProps {
    children: ReactNode
}

function LinkNavigationMenu({ pathname, children, title }: LinkNavigationMenuProps) {
    return (
        <Link href={pathname} className={`flex items-center gap-2 font-bold hover:opacity-80 ${pathname === '/' ? 'text-orange-200' : 'text-gray-200'}`}>{children}{title}</Link>

        // <Link href={'/watchlist'} className={`flex items-center gap-2 font-bold hover:opacity-80 text-gray-200 ${pathname === '/watchlist' ? 'text-orange-200' : 'text-gray-200'}`}><Heart className="size-6" />Watchlist</Link>
        // <Link href={'/timeline'} className={`flex items-center gap-2 font-bold hover:opacity-80 text-gray-200 ${pathname === '/timeline' ? 'text-orange-200' : 'text-gray-200'}`}><Clapperboard className="size-6" />Linha do tempo</Link>
        // <Link href={'/reviews'} className={`flex items-center gap-2 font-bold hover:opacity-80 text-gray-200 ${pathname === '/reviews' ? 'text-orange-200' : 'text-gray-200'}`}><Newspaper className="size-6" />Resenha</Link>
        // <Link href={'/connections'} className={`flex items-center gap-2 font-bold hover:opacity-80 text-gray-200 ${pathname === '/connections' ? 'text-orange-200' : 'text-gray-200'}`}><Users className="size-6" />Conexões</Link>
        // <Link href={'/settings'} className={`flex items-center gap-2 font-bold hover:opacity-80 text-gray-200 ${pathname === '/settings' ? 'text-orange-200' : 'text-gray-200'}`}><Settings className="size-6" />Configurações</Link>
        // <Link href={'/exit'} className={`flex items-center gap-2 font-bold hover:opacity-80 text-gray-200 ${pathname === '/exit' ? 'text-orange-200' : 'text-gray-200'}`}><LogOut className="size-6" />Sair</Link>
    )
};

function Icon({ children }: IconProps) {
    return (
        { children }
    )
}

LinkNavigationMenu.Icon = Icon

export { LinkNavigationMenu }