import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  test('renders Home component', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const headingElement = screen.getByText(
      /Escribe tu nombre y pulsa intro o haz clic en entrar para empezar el juego/i
    );
    expect(headingElement).toBeInTheDocument();
  });

  test('should type a valid name and click on the button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const inputElement = screen.getByTestId('name-input');
    fireEvent.change(inputElement, { target: { value: 'Usuario' } });

    const buttonElement = screen.getByTestId('login-button');
    fireEvent.click(buttonElement);

    expect(buttonElement).toBeEnabled();
  });

  test('should type an invalid name and click on the button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const inputElement = screen.getByTestId('name-input');
    fireEvent.change(inputElement, { target: { value: 'Usuario 123' } });

    const buttonElement = screen.getByTestId('login-button');
    fireEvent.click(buttonElement);

    expect(buttonElement).toBeDisabled();
  });
});
