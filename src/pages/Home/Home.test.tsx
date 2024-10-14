import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

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
