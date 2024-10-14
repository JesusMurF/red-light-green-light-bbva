import { renderHook, act } from '@testing-library/react';
import { usePlayerLogin } from './usePlayerLogin';
import { MemoryRouter } from 'react-router-dom';

describe('usePlayerLogin', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should initialize with default value', () => {
    const { result } = renderHook(() => usePlayerLogin(), {
      wrapper: MemoryRouter,
    });
    expect(result.current.handleLogin).toBeDefined();
  });

  test('should save player to local storage', () => {
    const { result } = renderHook(() => usePlayerLogin(), {
      wrapper: MemoryRouter,
    });

    act(() => {
      result.current.handleLogin('player1');
    });

    expect(localStorage.getItem('currentPlayer')).toEqual(
      JSON.stringify({
        name: 'player1',
        score: 0,
        highScore: 0,
      })
    );
  });

  test('should save player in players array on localStorage', () => {
    const { result } = renderHook(() => usePlayerLogin(), {
      wrapper: MemoryRouter,
    });

    act(() => {
      result.current.handleLogin('player1');
    });

    expect(localStorage.getItem('players')).toEqual(
      JSON.stringify([
        {
          name: 'player1',
          score: 0,
          highScore: 0,
        },
      ])
    );
  });

  test('should not add duplicate player to players array', () => {
    const { result } = renderHook(() => usePlayerLogin(), {
      wrapper: MemoryRouter,
    });

    act(() => {
      result.current.handleLogin('player1');
    });

    act(() => {
      result.current.handleLogin('player1');
    });

    expect(localStorage.getItem('players')).toEqual(
      JSON.stringify([
        {
          name: 'player1',
          score: 0,
          highScore: 0,
        },
      ])
    );
  });

  test('should handle multiple players correctly', () => {
    const { result } = renderHook(() => usePlayerLogin(), {
      wrapper: MemoryRouter,
    });

    act(() => {
      result.current.handleLogin('player1');
    });

    act(() => {
      result.current.handleLogin('player2');
    });

    expect(localStorage.getItem('players')).toEqual(
      JSON.stringify([
        {
          name: 'player1',
          score: 0,
          highScore: 0,
        },
        {
          name: 'player2',
          score: 0,
          highScore: 0,
        },
      ])
    );

    expect(localStorage.getItem('currentPlayer')).toEqual(
      JSON.stringify({
        name: 'player2',
        score: 0,
        highScore: 0,
      })
    );
  });
});
