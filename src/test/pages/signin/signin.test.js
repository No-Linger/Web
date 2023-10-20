import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signin from '@/app/signin/page';


jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
  }));

describe('Signin page', () => {

  it('renders the Signin page correctly', () => {

    render(<Signin />);

    expect(screen.getByTestId('no-linger-logo')).toBeInTheDocument();
  });

  it('allows the user to input email and password', () => {
    render(<Signin />);
  
    const emailInput = screen.getByPlaceholderText('adrianBravo@tec.com');
    const passwordInput = screen.getByPlaceholderText('********');
  
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  
    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('testpassword');
  });  
});
