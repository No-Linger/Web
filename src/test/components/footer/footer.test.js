import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/app/footer/footer';

describe('Footer', () => {
  it('renders the footer text', () => {
    const { getByTestId } = render(<Footer />);
    const footerText = getByTestId('footer-text');
    expect(footerText).toBeInTheDocument();
  });

  it('renders the footer link', () => {
    const { getByText } = render(<Footer />);
    const footerLink = getByText(/No-Linger™/i);
    expect(footerLink).toHaveAttribute('href', 'https://github.com/No-Linger');
  });
});