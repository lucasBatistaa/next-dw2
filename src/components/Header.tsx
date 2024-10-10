import { Clapperboard, HomeIcon, Menu, Popcorn } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between items-center w-full px-2 py-3 bg-black text-white">
            <Link href={'/'} className="flex items-center gap-1 text-blue-600">
                <Clapperboard className="size-4" />
                
                <h1 className="font-bold">MovieIt</h1>
            </Link>

            <nav className="flex gap-2">
                <Link href={'/'} className="flex items-center gap-1 text-sm hover:opacity-80">
                    <HomeIcon className="size-4"/>
                    Home
                </Link>

                <Link href={'/movies'} className="flex items-center gap-1 text-sm hover:opacity-80">
                    <Popcorn className="size-4" />
                    Movies
                </Link>
                
                <Link href={'/myList'} className="flex items-center gap-1 text-sm hover:opacity-80">
                    <Menu className="size-4"/>
                    My List
                </Link>
            </nav>
        </div>
    )
};