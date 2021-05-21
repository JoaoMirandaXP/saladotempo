import React from 'react'

import Semana from './Components/Semana'

export default function Register(){
  return(
    <div>
        <h1>Essa função deve ser chamada apenas na instalação do aplicativo em que vai perguntar :</h1>
        <ul>
          <li>Nome</li>
          <input></input>
          <br/>
          <li>Meta de estudos</li>
          Passar no ITA
          <br/>
          <li>Rotina atual (Por semana)</li>

          <br/>
          Quantas horas de sono você quer ter ?
          <br/>
          Que horas você quer acordar ?
          <br/>
          Fazer um componente de rotina, será uma tabela, com todos os dias da semana
          <br/>
          Agora vamos montar a sua rotina, se já tiver alguma insira nos espaços abaixo e eu vou te dando sugestões

          <br />
        </ul>
        <Semana />
    </div>
  );
}
