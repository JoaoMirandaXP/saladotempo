import React from 'react'

class Relogio extends React.Component{
  //Construtor da classe, executado ao instanciar
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  // Conceito de javascript: State
  atualizarRender(){
    this.setState({
      date: new Date()
    });
  }

  //Métodos de Ciclo de vida da classe
  //DidMount é executado depois que o componente é renderizado
  componentDidMount(){
    this.timerID = setInterval(
      () => this.atualizarRender(),
      1000
    );
  }
  //Derrubar o temporizador com o método do ciclo de vida WillUnmount
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render(){
    return (
      <div className="relogio">
        <h2>Olá! Eu sou o seu relógio!</h2>
        <h3>E são {this.state.date.toLocaleTimeString()}</h3>
      </div>
    )
  }
}

export default Relogio
