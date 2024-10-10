import Image, { StaticImageData } from "next/image"

import { Star } from "lucide-react";

interface CardMovieProps {
    title: string
    avaliation: number
    banner: StaticImageData
}

export default function CardMovie({ title, avaliation, banner }: CardMovieProps) {
    return (
        <div
            // onClick={() => setIsOpenModal(true)}
            className="flex flex-col h-52 w-36 gap-2 p-2 cursor-pointer hover:opacity-80"
        >
            <Image
                src={banner}
                alt="Banner do filme"
                className="h-40 rounded-xl"
            />

            <div className="flex justify-between px-1">
                <h2 className="font-bold text-sm">{title}</h2>

                <div className="flex gap-1 items-center">
                    <p className="text-[12px]">{avaliation}</p>

                    <Star className="size-3 text-yellow-400 fill-yellow-400" />
                </div>
            </div>
        </div>
    )
};
