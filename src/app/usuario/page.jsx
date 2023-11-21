'use client'

export default function Profile() {
    const user = {
        nombre: 'Nombre del Usuario',
        correo: 'usuario@example.com',
        telefono: '123-456-7890',
      };
    
      return (
        <div>
          <h1>Mi Perfil</h1>
          <p>Nombre: {user.nombre}</p>
          <p>Correo: {user.correo}</p>
          <p>Número de Teléfono: {user.telefono}</p>
        </div>
      );
    }

