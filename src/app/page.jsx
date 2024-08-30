'use client';
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import Imagem_1 from '@/app/Componentes/imagens-do-projeto/barbearia.png'
import { FiSun, FiMoon } from "react-icons/fi";


export default function Home() {


  const [alterar_fundo, setAlterar_Fundo] = useState(false)

  function trocarfundo() {
    setAlterar_Fundo(!alterar_fundo)
  }

  return (
    <>
   


      <div className={ alterar_fundo ? estilos.lua : estilos.dia}>
        <div className={estilos.cabecalho}>
        <Image className={estilos.imagem} src={Imagem_1} alt="logo" />

        <button className={estilos.button} onClick={trocarfundo}>{alterar_fundo ? <FiSun /> : <FiMoon />} </button>
        
      </div>
      <div className={estilos.sub_imagem}></div>


<main className={estilos.texto}>
    <div >
    <h1 className={estilos.estilo} >BEM VINDO A BARBER SHOP</h1>
        <p className={estilos.estilo}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
     

      <p className={estilos.estilo}>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.

      </p>
      <p className={estilos.assinatura } >Sr. Hugo M.</p>
      </div>
      </main>
      </div>
    </>
  );
}
