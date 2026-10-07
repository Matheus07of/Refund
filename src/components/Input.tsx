interface   IInput {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string;
}
export function Input ({
    value,
    onChange,
    placeholder,
}:IInput){
    return (
         <input className="text-gray-100 text-body-md border-2 border-gray-300 rounded-lg focus:border-product-green-100 outline-hidden px-4 py-2"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    />
    )
}