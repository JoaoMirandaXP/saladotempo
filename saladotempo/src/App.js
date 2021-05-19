//Importação básica React
import React from 'react'

//import styles
import './_css/index.css'
//import components
import Header from './Header'

class Title extends React.Component {
  render(){
    return (
      <h1>Te amo demais!</h1>
    )
  }
}
function App(){
  return(
    <>
      <Header title="Juliana"/>
      <Title />
    </>
  );
}

export default App
