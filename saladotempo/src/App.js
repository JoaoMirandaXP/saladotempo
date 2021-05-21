//Importação básica React
import React from 'react'

//import styles
import './_css/index.css'
//import components
import Header from './Header'
import Register from './Register'

function App(){
  return(
    <>
      <Header title="Juliana"/>
      <Register />
    </>
  );
}

export default App
