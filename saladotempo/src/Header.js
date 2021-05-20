import React from 'react'
//Style
import './_css/header.css'

export default function Header(){
  return(
    <>
      <ul>
        <li>Início</li>
        <li>Projetos</li>
        <li>Meta Semanal</li>
        <li>Conteúdo</li>
        <li>Gráficos</li>
      </ul>
      <span>Configurações</span>
    </>
  );
}
