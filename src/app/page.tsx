'use client'
import Image from "next/image";

import User from '../../public/assets/user.png'
import { useEffect, useState } from "react";
import { TmdbMovies } from "@/services/TMDB/tmdb-movies";
import { Flame } from "lucide-react";

interface PopularMovies {
	id: number
	title: string
	backdrop_path: string
	poster_path: string
	release_date: string
}

export default function Home() {
	const [popularMovies, setPopularMovies] = useState<PopularMovies[]>([])

	const getPopularMoviesTMDB = async () => {
		try {
			const movies = await TmdbMovies.popularMovies();
			console.log(movies)

			const popularMoviesList = movies.map((movie) => {
				return {
					id: movie.id,
					title: movie.title,
					backdrop_path: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
					poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
					release_date: movie.release_date // Corrigido erro de digitação
				};
			});

			setPopularMovies(popularMoviesList); // Atualiza o estado de uma vez com todos os filmes
		} catch (error) {
			console.error("Erro ao obter filmes populares:", error);
		}

		// const movies = await TmdbMovies()

	}

	useEffect(() => {
		getPopularMoviesTMDB()
	}, [])



	return (
		<div className="space-y-10">
			<div className="relative">
				<Image src={popularMovies.at(2)?.backdrop_path} width={600} height={400} alt="Banner" className="w-full h-[400px] hover:opacity-80 cursor-pointer object-scale-down" />

				<div className="absolute top-5 left-10 flex gap-2 items-center text-white text-xs">
					<span>Assistido por:</span>

					<div className="flex space-x-[-20px]">
						<Image src={User} alt="Ícone do usuário" className="w-10 h-10" />
						<Image src={User} alt="Ícone do usuário" className="w-10 h-10" />
					</div>

					<span>+ 2 conexões</span>
				</div>

				<div className="absolute left-10 bottom-10 space-y-1">
					<h1 className="text-2xl font-bold text-white">Star Wars: Episode III - Revenge of the Sith</h1>
					<h2 className="text-xs">2005 - 7.6 </h2>
				</div>
			</div>

			<div className="space-y-5">
				<div className="flex gap-2 text-orange-200 items-center">
					<Flame className="size-6" />

					<h1 className="font-bold text-2xl">Trending Movies</h1>
				</div>

				<div className="flex gap-7 flex-wrap">
					{
						popularMovies.map((movie) => (
							<div className="w-[280px] space-y-4" key={movie.id}>
								<div className="relative">
									<Image src={movie.poster_path} width={280} height={180} alt="poster" className="h-[180px] rounded-[20px] rounded-tl-none object-fill " />

									<div className="absolute top-0 left-0 px-2 py-1 bg-brown-200 rounded-br-lg text-white text-xs">Ficção</div>
								</div>
								<div className="space-y-1">
									<h3 className="text-white">{movie.title}</h3>

									<span className="text-gray-200 text-xs">{movie.release_date}</span>
								</div>


							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}
