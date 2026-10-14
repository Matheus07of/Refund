import { useState } from 'react';

const CATEGORIAS = [
  'Alimentação',
  'Hospedagem',
  'Transporte',
  'Serviços',
  'Outros',
];

export function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  function handleSelect(item: string) {
    setSelected(item);
    setIsOpen(false);
  }

  return (
    <div className="relative w-full flex flex-col gap-1.5 font-sans">
      <label
        className={`text-label font-label-regular uppercase tracking-wider transition-colors ${
          isOpen ? 'text-product-green-100' : 'text-gray-200'
        }`}
      >
        Categoria
      </label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg border text-sm transition-colors outline-none ${
          isOpen
            ? 'border-product-green-100 ring-1 ring-product-green-100'
            : 'border-gray-300 hover:border-gray-300'
        }`}
      >
        <span className={selected ? 'text-gray-200' : 'text-gray-200'}>
          {selected || 'Selecione'}
        </span>

        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? 'text-product-green-100 rotate-180' : 'text-gray-400'
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg py-1 z-20">
          {CATEGORIAS.map((item) => {
            const isSelected = selected === item;

            return (
              <li
                key={item}
                onClick={() => handleSelect(item)}
                className={`flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                  isSelected
                    ? 'font-bold text-gray-900 bg-gray-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span>{item}</span>

                {isSelected && (
                  <svg
                    className="w-4 h-4 text-product-green-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Select;