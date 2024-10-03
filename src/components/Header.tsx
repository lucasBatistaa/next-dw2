import { Network } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between items-center w-full px-2 py-3 bg-gray-300">
            <Link href={'/'} className="flex gap-1 items-center">
                <Network className="size-4" />
                
                <h1 className="font-bold">NextJS</h1>
            </Link>

            <nav className="flex gap-2">
                <Link href={'#'} className="text-sm hover:opacity-80">Home</Link>
                <Link href={'#'} className="text-sm hover:opacity-80">Sobre</Link>
                <Link href={'#'} className="text-sm hover:opacity-80">Contatos</Link>
            </nav>
        </div>
    )
};
