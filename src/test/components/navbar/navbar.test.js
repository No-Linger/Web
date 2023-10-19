import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import Navbar from '@/app/components/navbar/navbar'


describe('Navbar', () => {
    it('renders navigation links', () => {
        render(<Navbar />)
        const links = screen.getAllByRole('link')
        expect(links).toHaveLength(3)
        expect(links[0]).toHaveTextContent('Planogramas')
        expect(links[1]).toHaveTextContent('Personas')
        expect(links[2]).toHaveTextContent('Tiendas')
      })

    it('opens and closes the user menu', () => {
        render(<Navbar />)
        const userButton = screen.getByTestId('profile-button');

        fireEvent.click(userButton);
        const userMenu = screen.getByTestId('profile-menu');
        expect(userMenu).toBeVisible(); 

        fireEvent.click(userButton);
        expect(userMenu).not.toBeVisible();
      })
})