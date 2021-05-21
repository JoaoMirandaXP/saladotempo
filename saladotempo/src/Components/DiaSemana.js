import React from 'react'

export default function DiaSemana(props){
  return(
    <td>
      <tr>{props.dia}</tr>
      <tr>Horário 1</tr>
      <tr>Horário 2</tr>
      <tr>Horário 3</tr>
      <tr>Horário 4</tr>
      <tr>Horário 5</tr>
    </td>
  );
}
