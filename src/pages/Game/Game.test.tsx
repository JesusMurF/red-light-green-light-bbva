import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Game from './Game';

describe('Game', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    localStorage.clear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should render Game component', () => {
    render(<Game />, { wrapper: MemoryRouter });
    const gameElement = screen.getByTestId('game');
    expect(gameElement).toBeInTheDocument();
  });

  test('should click on left button', () => {
    render(<Game />, { wrapper: MemoryRouter });
    const leftButton = screen.getByTestId('step-button-left');

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    fireEvent.click(leftButton);
    expect(leftButton).toBeInTheDocument();
    expect(screen.getByText('Puntuación: 1')).toBeInTheDocument();
  });

  test('should click on left and right button', () => {
    render(<Game />, { wrapper: MemoryRouter });
    const leftButton = screen.getByTestId('step-button-left');
    const rightButton = screen.getByTestId('step-button-right');

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    fireEvent.click(leftButton);
    fireEvent.click(rightButton);
    expect(leftButton).toBeInTheDocument();
    expect(rightButton).toBeInTheDocument();
    expect(screen.getByText('Puntuación: 2')).toBeInTheDocument();
    expect(screen.getByText('Record: 2')).toBeInTheDocument();
  });

  test('should click on right and then on left twice and score to be 1', () => {
    render(<Game />, { wrapper: MemoryRouter });
    const leftButton = screen.getByTestId('step-button-left');
    const rightButton = screen.getByTestId('step-button-right');

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    fireEvent.click(rightButton);
    fireEvent.click(leftButton);
    fireEvent.click(leftButton);
    expect(leftButton).toBeInTheDocument();
    expect(screen.getByText('Puntuación: 1')).toBeInTheDocument();
  });

  test('should click on left with red light and score to be 0', () => {
    render(<Game />, { wrapper: MemoryRouter });
    const leftButton = screen.getByTestId('step-button-left');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    fireEvent.click(leftButton);
    expect(leftButton).toBeInTheDocument();
    expect(screen.getByText('Puntuación: 0')).toBeInTheDocument();
  });
});
