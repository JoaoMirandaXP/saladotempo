import React from 'react'
import DiaSemana from './DiaSemana'

export default function Semana(props){
  return(
    <table>
      <DiaSemana dia="Segunda" />
      <DiaSemana dia="Terça" />
      <DiaSemana dia="Quarta" />
      <DiaSemana dia="Quinta" />
      <DiaSemana dia="Sexta" />
      <DiaSemana dia="Sábado" />
      <DiaSemana dia="Domingo" />
    </table>
  );
}
