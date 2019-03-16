import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <h1 className="titulo">
          Los trabajadores de la televisión y la radio llevaremos a cabo nuestra
          sexagésima octava asamblea general ordinaria del consejo nacional en Quintana Roo,
          inaugurando los trabajos del gobernador del estado. Con el respaldo de la confederación
          de trabajadores de México avanzamos para un mejor futuro comprometidos contigo. ¡Por una superación social! SITATYR CTM
        </h1>
        <form onSubmit={this.handleSubmit}>
        <input type="text" className="caja" value={this.state.newState} onChange={this.handleChange}>
        </input>
        </form>

        <p className="texto">{this.state.newState}</p>
        {
          //el mapeo es para modificar objetos de manera asincrona
          this.state.listState.map((task, index) =>
          <div key={'mykey' + index}>
                  <h2 className="task"> {task} </h2>
          </div>

        )
      }
      </div>
    );
  }
  constructor(prop) {
    //inicializa la clase
    super(prop)
    //estados a los que vamos a reaccionar
    this.state = {
      newState: "",
      listState: []
    }
  }

  handleSubmit = (evento) => {
    evento.preventDefault();
    let tasks = this.state.listState;
    tasks.push(this.state.newState);
    this.setState({
      //append a la lista
      newState : "",
      listState: tasks
    })
  }
  //funcion que se activa con el cambio
  handleChange = (evento) => {
    this.setState({
      newState: evento.target.value
    })
    //checa si se presiona enter

  }
}

export default App;
