//Importação básica React
import React from 'react'

//import styles
import './_css/index.css'
//import components
import Header from './Header'
import Relogio from './Components/Relogio'

function App(){
  return(
    <>
      <Header title="Juliana"/>
      <Relogio />
    </>
  );
}

export default App
