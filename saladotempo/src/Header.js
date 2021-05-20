import React from 'react'
//Style
import './_css/header.css'
//Components
import Relogio from './Components/Relogio'
export default function Header(){
  return(
    <>
      <ul>
        <li>Início</li>
        <li>Projetos</li>
        <li>Meta Semanal</li>
        <li>Conteúdo</li>
        <li>Gráficos</li>
        <li><span>Configurações</span></li>
        <Relogio />
      </ul>
    </>
  );
}
