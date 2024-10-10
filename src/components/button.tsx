import { Plus } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

export default function Button({ title, ...props } :ButtonProps) {
    return (
        <button {...props} className="mx-auto flex justify-center items-center gap-2 h-8 w-40 text-white bg-blue-600 hover:bg-blue-500 rounded-md font-bold">
            <Plus className="size-4" />
            {title}
        </button>
    )
};
