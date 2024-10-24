import { BellRing, Search } from "lucide-react";
import Image from "next/image";

import UserImage from '../../public/assets/user.png'

export default function Header() {
    return (
        <div className="flex items-center justify-between">
            <div className="w-[400px] flex items-center justify-between gap-2 px-5 rounded-[40px] border border-gray-200">
                <input type="text" placeholder="Pesquise um filme" className="flex-1 py-4 bg-transparent text-gray-200 focus:outline-none placeholder:text-gray-200" />

                <Search className="size-6 text-gray-200 hover:opacity-90 cursor-pointer" />
            </div>

            <div className="flex items-center gap-10">
                <BellRing className="size-6 text-orange-200 hover:opacity-90 cursor-pointer" />

                <div className="flex items-center gap-[10px]">
                    <Image src={UserImage} alt="Ícone do usuário"/>

                    <h1 className="font-bold text-orange-200">Lucas Batista</h1>
                </div>
            </div>
        </div>
    )
};