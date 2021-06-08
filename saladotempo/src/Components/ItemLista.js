import React, {useEffect} from 'react'

export default function ItemLista(props){
  /*useEffect(()=>{
    inputs = document.getElementsByTagName("input");
    input.setAttribute('style', 'text-decoration: line-through;')
  });
  */
  return(
    <>
      <input type="checkbox"/>
      <li>{props.text}</li>
    </>
  );
}
