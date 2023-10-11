import React, { Component } from 'react';

class App extends Component {
  
  handleClick = () => {
    alert('¡Se hizo clic en el botón!');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Clic aquí</button>
      </div>
    );
  }
}

export default App;
