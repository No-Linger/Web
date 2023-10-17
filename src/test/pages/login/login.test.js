import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '@/app/page';

describe('Login', () => {
  it('renders the login form', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/Correo/i);
    const passwordInput = screen.getByLabelText(/Contraseña/i);
    const rememberCheckbox = screen.getByLabelText(/Recuerdame/i);
    const submitButton = screen.getByRole('button', { name: /Iniciar sesión/i });
    const createAccountLink = screen.getByRole('link', { name: /Crear cuenta/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(rememberCheckbox).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(createAccountLink).toBeInTheDocument();
  });
});