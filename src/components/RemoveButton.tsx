import { X} from "@phosphor-icons/react"
import type { MouseEvent } from "react"

interface IRemoveButton{ onClick :(event: MouseEvent<HTMLButtonElement>)=>void }
export function RemoveButton ({onClick}:IRemoveButton){
    return <button  onClick={onClick} className="text-feedback-danger hover:bg-gray-400 rounded-1 p-1"><X size={16} /></button>
}