import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from '@/app/signup/page';


jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
  }));

describe('Signup', () => {

    // Renders a form with email, password, and passwordAgain inputs
    it('should render a form with email, password, and passwordAgain inputs', () => {
      // Arrange
      render(<Signup />);
  
      // Act
      const emailInput = screen.getByLabelText('Correo electrónico');
      const passwordInput = screen.getByLabelText('Contraseña');
      const passwordAgainInput = screen.getByLabelText('Ingresa nuevamente tu contraseña');
  
      // Assert
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(passwordAgainInput).toBeInTheDocument();
    });

    it('should allow user to input email, password, and passwordAgain', () => {
      // Arrange
      render(<Signup />);
  
      // Act
      const emailInput = screen.getByLabelText('Correo electrónico');
      const passwordInput = screen.getByLabelText('Contraseña');
      const passwordAgainInput = screen.getByLabelText('Ingresa nuevamente tu contraseña');
  
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password' } });
      fireEvent.change(passwordAgainInput, { target: { value: 'password' } });
  
      // Assert
      expect(emailInput.value).toBe('test@example.com');
      expect(passwordInput.value).toBe('password');
      expect(passwordAgainInput.value).toBe('password');
    });

    it('should disable the submit button if any of the inputs are empty', () => {
      // Arrange
      render(<Signup />);
  
      // Act
      const submitButton = screen.getByTestId('signup-button'); 
  
      // Assert
      expect(submitButton).toBeDisabled();
    });

    // it('should not allow user to input invalid email format', () => {
    //   // Arrange
    //   render(<Signup />);
  
    //   // Act
    //   const emailInput = screen.getByLabelText('Correo electrónico');
  
    //   fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
  
    //   // Assert
    //   expect(emailInput.value).toBe('');
    // });

    // // Does not allow user to input password less than 6 characters
    // it('should not allow user to input password less than 6 characters', () => {
    //   // Arrange
    //   render(<Signup />);
  
    //   // Act
    //   const passwordInput = screen.getByLabelText('Contraseña');
  
    //   fireEvent.change(passwordInput, { target: { value: 'pass' } });
  
    //   // Assert
    //   expect(passwordInput.value).toBe('');
    // });

    // // Does not allow user to input passwordAgain less than 6 characters
    // it('should not allow user to input passwordAgain less than 6 characters', () => {
    //   // Arrange
    //   render(<Signup />);
  
    //   // Act
    //   const passwordAgainInput = screen.getByLabelText('Ingresa nuevamente tu contraseña');
  
    //   fireEvent.change(passwordAgainInput, { target: { value: 'pass' } });
  
    //   // Assert
    //   expect(passwordAgainInput.value).toBe('');
    // });
});
