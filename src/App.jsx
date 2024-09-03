import './app.css'
import { Search } from "lucide-react";
import { Card } from "./components/Card";

export function App() {
  return (
    <>
      <header className="bg-[#A4A9AD] text-white h-32 w-[100%] flex items-center justify-center flex-col gap-8 p-32">
        <p className="text-3xl font-medium font-serif"><span className="text-[#01161E]">Code</span>Club</p>
        <div className='relative flex items-center'>
          <Search className="absolute size-4 ml-3 text-white pointer-events-none"/>
          <input 
            id="search"
            type="text" 
            placeholder="Pesquisar" 
            className="bg-[#393E41] text-white font-sans placeholder:text-white w-[800px] p-4 pl-9 outline-none rounded-md border border-[#25252961] focus:border-black"
          />
        </div>
      </header>
      
      <main className="bg-[#393E41] flex flex-col gap-10 items-center p-20">
        <Card 
          titleCard="O que é linguagem de programação? Conheça as principais"
          textCard="Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."
        />
        <Card 
          titleCard="GitHub agora permite fazer login sem precisar de senha"
          textCard="O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores."  
        />
        <Card 
          titleCard="Por que os hiperlinks são azuis em sua maioria?"
          textCard="Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor."
        />
      </main>
    </>
  )
}