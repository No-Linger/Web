import React, { Component } from 'react';
import '../styles/styles.css';

class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  // Función que se ejecutará cuando el valor del input cambie
  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  // Función que se ejecutará cuando se haga clic en un botón para mostrar el valor
  handleClick = () => {
    alert(`El valor del input es: ${this.state.inputValue}`);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Escribe algo..."
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Mostrar Valor</button>
      </div>
    );
  }
}

export default InputComponent;
