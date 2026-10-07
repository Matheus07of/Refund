import { Button } from "./components/Button";
import { RemoveButton } from "./components/RemoveButton";
import "./index.css"
import { HorseIcon, HeartIcon, CubeIcon } from "@phosphor-icons/react";

export default function App() {
  return <section>
    <h1 className="text-gray-500 text-label">Hello World</h1>
    <HorseIcon />
    <HeartIcon />
    <CubeIcon />
    <Button disabled={true}>Adicionar despesa</Button>
    <Button onClick={() => {console.log(`Cliquei no botão`)}}>Adicionar despesa</Button>
    <RemoveButton onClick={function(){console.log('Removido!')}}/>
  </section>
}