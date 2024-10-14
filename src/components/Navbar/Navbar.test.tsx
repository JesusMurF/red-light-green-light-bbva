import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  afterEach(() => {
    localStorage.clear();
  });

  test('renders Navbar component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders the title', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const titleElement = screen.getByText(
      /Red light, Green light by Jesús Mur/i
    );
    expect(titleElement).toBeInTheDocument();
  });

  test('does not render the exit link when there is no current player', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const exitLink = screen.queryByText(/salir/i);
    expect(exitLink).not.toBeInTheDocument();
  });

  test('renders the exit link when there is a current player', () => {
    localStorage.setItem('currentPlayer', JSON.stringify({ name: 'Player' }));
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const exitLink = screen.getByText(/salir/i);
    expect(exitLink).toBeInTheDocument();
  });

  test('removes the current player from local storage when exit link is clicked', () => {
    localStorage.setItem('currentPlayer', JSON.stringify({ name: 'Player' }));
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const exitLink = screen.getByText(/salir/i);
    fireEvent.click(exitLink);
    expect(localStorage.getItem('currentPlayer')).toBeNull();
  });

  test('navigates to the correct page when exit link is clicked', () => {
    localStorage.setItem('currentPlayer', JSON.stringify({ name: 'Player' }));
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const exitLink = screen.getByText(/salir/i);
    fireEvent.click(exitLink);
    expect(window.location.pathname).toBe('/');
  });
});
