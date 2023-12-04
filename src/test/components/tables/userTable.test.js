import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import UserTable from '@/app/components/table/userTable';

describe('UserTable Component', () => {
  const users = [
    {
      nombre: 'Alice',
      email: 'alice@example.com',
      phone_number: '123-456-7890',
      ultima_conexion: '2023-10-15',
      avatar: '/path-to-avatar-alice.png',
    },
    {
      nombre: 'Bob',
      email: 'bob@example.com',
      phone_number: '987-654-3210',
      ultima_conexion: '2023-10-14',
      avatar: '/path-to-avatar-bob.png',
    },
    // Add more user data as needed for your tests
  ];

  it('renders user data in the table', () => {
    render(<UserTable users={users} onClick={jest.fn()} />);

    // Check if user data is rendered
    users.forEach((user) => {
      expect(screen.getByText(user.nombre)).toBeInTheDocument();
      expect(screen.getByText(user.phone_number)).toBeInTheDocument();
      expect(screen.getByText(user.ultima_conexion)).toBeInTheDocument();
    });

    // Check if the "Agregar usuario" button is rendered
    expect(screen.getByText('Agregar usuario')).toBeInTheDocument();
  });

  it('calls onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(<UserTable users={users} onClick={onClickMock} />);

    const addButton = screen.getByText('Agregar usuario');
    fireEvent.click(addButton);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
