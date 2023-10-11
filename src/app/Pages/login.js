import React, { Component } from 'react';
import './styles.css';  // Asegúrate de importar tus estilos CSS

import Image from './Image';
import Input from './Input';
import Boton from './Boton';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (value) => {
    this.setState({ username: value });
  }

  handlePasswordChange = (value) => {
    this.setState({ password: value });
  }

  handleLoginClick = () => {
    // Aquí puedes agregar lógica para verificar las credenciales del usuario
    // Por ejemplo, puedes enviar una solicitud a un servidor para autenticar al usuario
    // y redirigirlo a la página de inicio si las credenciales son válidas.
    alert(`Usuario: ${this.state.username}, Contraseña: ${this.state.password}`);
  }

  render() {
    return (
      <div className="login-page">
        <Image />
        <Input
          placeholder="Usuario"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <Input
          placeholder="Contraseña"
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <Boton label="Iniciar Sesión" onClick={this.handleLoginClick} />
      </div>
    );
  }
}

export default LoginPage;
