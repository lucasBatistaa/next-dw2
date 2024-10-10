import { X } from "lucide-react"
import Button from "./button"

interface ModalProps {
    title: string
    closeModal: () => void
}

export default function Modal({ title, closeModal }: ModalProps) {
    return (
        <div onClick={closeModal} className="fixed inset-0 flex items-center justify-center text-black bg-black opacity-70">
            <div className="flex flex-col justify-between h-28 w-52 p-2 bg-white rounded-md">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold">{title}</h1>

                    <X
                        className="size-4 cursor-pointer hover:opacity-80"
                        onClick={closeModal}
                    />
                </div>

                <Button title="Adicionar" onClick={closeModal} />
            </div>
        </div>
    )
};
