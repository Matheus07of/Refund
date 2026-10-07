import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { RemoveButton } from "./components/RemoveButton";
import "./index.css"
import { HorseIcon, HeartIcon, CubeIcon } from "@phosphor-icons/react";

export default function App() {
 const [inputValue, setInputValue] = useState('')
 return <section className="flex flex-col gap-4">
    <h1 className="text-gray-500 text-label">Hello World</h1>
    <HorseIcon />
    <HeartIcon />
    <CubeIcon />
    <Button disabled={true}>Adicionar despesa</Button>
    <Button onClick={() => {console.log(`Cliquei no botão`)}}>Adicionar despesa</Button>
    <RemoveButton onClick={function(){console.log('Removido!')}}/>
    <Input value={inputValue}
    onChange={function(event){
      setInputValue(event.target.value)
    }}/>
    {inputValue}
  </section>
}