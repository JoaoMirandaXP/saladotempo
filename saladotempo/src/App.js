//Importação básica React
import React from 'react'

//import styles
import './css/index.css'
//import components
import Header from './Header'
import Register from './Register'
import Tarefas from './Components/Tarefas'
import Main from './Components/Main'
function App(){
  return(
    <>
      <Header title="Juliana"/>
      <Register />
      <Tarefas />
      <Main />
    </>
  );
}

export default App
