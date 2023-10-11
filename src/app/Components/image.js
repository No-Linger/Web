import React, { Component } from 'react';

class ImageComponent extends Component {

  render() {
    return (
      <div>
        <img
          src="ruta_de_la_imagen.jpg"
          alt="Descripción de la imagen"
        />
      </div>
    );
  }
}

export default ImageComponent;
