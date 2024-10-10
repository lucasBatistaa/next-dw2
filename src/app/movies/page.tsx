'use client'

import { useState } from "react"

import Button from "@/components/button"
import Modal from "@/components/modal"

export default function Movies() {
    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <div>
            <h1>Dashboard</h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, esse mollitia nisi a voluptas, quisquam quae delectus ut assumenda ullam odit sint dolorem quis dolore consequatur libero veritatis aspernatur optio!</p>

            <Button onClick={() => setIsOpenModal(true)} title="Adicionar"/>

            { isOpenModal && (
                <Modal title="Dashboard" closeModal={() => setIsOpenModal(false)} />
            )}
        </div>
    )
};
