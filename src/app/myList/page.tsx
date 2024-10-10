'use client'

import { useState } from "react";

import Modal from "@/components/modal";

import Banner from '../../../public/assets/banner.jpg'
import CardMovie from "@/components/cardMovie";

export default function MyList() {
    const [movies, setMovies] = useState([{
        title: 'Chuck',
        avaliation: 4,
        banner: Banner
    }, {
        title: 'Chuck',
        avaliation: 4,
        banner: Banner

    }, {
        title: 'Chuck',
        avaliation: 4,
        banner: Banner
    }])

    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <div className="space-y-2">
            <h1 className="font-bold">My List</h1>

            <div className="flex">
                {
                    movies.map((movie, index) => (
                        <CardMovie 
                            key={index}
                            title={movie.title}
                            avaliation={movie.avaliation}
                            banner={movie.banner}
                        />
                    ))
                }
            </div>

            {
                isOpenModal && (
                    <Modal title="Reviews" closeModal={() => setIsOpenModal(false)} />
                )
            }
        </div>
    )
};
