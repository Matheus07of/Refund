import type { ReactNode, MouseEvent } from "react";

interface IButton {
    children :ReactNode
    disabled ?:boolean
    onClick :(event: MouseEvent<HTMLButtonElement>)=>void

}
export function Button({children, disabled, onClick}:IButton) {
    return <button 
    disabled={disabled}
    onClick={onClick}
    className={`bg-product-green-100 rounded-lg text-white text-body-md font-bold leading-body-md font-primary px-5 py-4 w-full hover:bg-product-green-200 disabled:bg-product-green-100 disabled:cursor-not-allowed disabled:opacity-50`}>
        {children}</button>
}