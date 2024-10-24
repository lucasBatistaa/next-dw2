import Image from "next/image";

import Banner from '../../public/assets/banner.png'
import User from '../../public/assets/user.png'

export default function Home() {
	return (
		<div className="">
			<div className="relative">
				<Image src={Banner} alt="Banner" className="w-full hover:opacity-80 cursor-pointer" />

				<div className="absolute top-5 left-10 flex gap-2 items-center text-white text-xs">
					<span>Assistido por:</span>
					
					<div className="flex space-x-[-20px]">
						<Image src={User} alt="Ícone do usuário" className="w-10 h-10" />	
						<Image src={User} alt="Ícone do usuário" className="w-10 h-10"/>
					</div>

					<span>+ 2 conexões</span>
				</div>

				<div className="absolute left-10 bottom-10 space-y-1">
					<h1 className="text-2xl font-bold text-white">Star Wars: Episode III - Revenge of the Sith</h1>
					<h2 className="text-xs">2005 - 7.6 </h2>
				</div>
			</div>
		</div>
	)
}
