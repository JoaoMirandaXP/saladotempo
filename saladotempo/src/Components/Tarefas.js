import React, {useState, useEffect } from 'react'
import ItemLista from './ItemLista'

export default function Tarefas(){
  const [isDone, setProgress] = useState(0);

/* useEffect(()=> {
    var inputs = document.getElementsByTagName('input');
    console.log(inputs)
    Array.from(inputs).forEach((element)=>{
      if(element.getAttribute('type') == 'checkbox'){
        console.log(element.value)
        if (element.value){
          var text = document.getElementById('input-child')
          text.setAttribute("style", "text-decoration: line-through")
        }
        else{
          var text = document.getElementById('input-child')
          text.setAttribute("style", "")
        }
      }
    });
  })
  */
  return(
    <>
      <h1>O que tem para hoje ?</h1>
      <br/>
      <h2>Que dia é hoje ? {}</h2>
      <ul>
        <ItemLista text="Organizar o material que está na cama"/>
        <ItemLista text="Focar em aprender os materiais"/>
        <ItemLista text="Gerenciar o conteúdo adquirido"/>
        <ItemLista text="Fazer uma caixa: O que você gostaria de aprender ?"/>
        <ItemLista text="Auto organizar o material que será enviado para mim mesmo todos os dias"/>
        <ItemLista text="Memorizar o conteúdo aprendido com clareza e reutilizá-lo (Abstração do conhecimento)"/>
      </ul>
    </>
  );
}
