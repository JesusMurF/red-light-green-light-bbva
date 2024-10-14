import { renderHook, act } from '@testing-library/react';
import { usePlayerState } from './usePlayerState';

describe('usePlayerState', () => {
  beforeEach(() => {
    localStorage.setItem(
      'currentPlayer',
      JSON.stringify({
        name: 'Player1',
        score: 0,
        highScore: 0,
      })
    );

    localStorage.setItem(
      'players',
      JSON.stringify([
        {
          name: 'Player1',
          score: 0,
          highScore: 0,
        },
        {
          name: 'Player2',
          score: 0,
          highScore: 0,
        },
      ])
    );
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('should initialize with default value', () => {
    const { result } = renderHook(() => usePlayerState());
    expect(result.current.currentPlayer).toBeDefined();
    expect(result.current.score).toBe(0);
  });

  test('should update player state', () => {
    const { result } = renderHook(() => usePlayerState());

    act(() => {
      result.current.updatePlayerState('left', 1);
      result.current.updatePlayerState('right', 2);
    });

    expect(result.current.currentPlayer.score).toBe(2);
    expect(result.current.currentPlayer.highScore).toBe(2);
    expect(result.current.score).toBe(2);
  });

  test('should calculate new score click on left and right', () => {
    const { result } = renderHook(() => usePlayerState());

    act(() => {
      result.current.updatePlayerState('left', 1);
      result.current.updatePlayerState('right', 2);
    });

    expect(result.current.calculateNewScore('left')).toBe(3);
  });

  test('should calculate new score clicking the same button twice', () => {
    const { result } = renderHook(() => usePlayerState());

    act(() => {
      result.current.updatePlayerState('left', 1);
    });

    expect(result.current.calculateNewScore('left')).toBe(0);
  });

  test('should current player score update in local storage', () => {
    const { result } = renderHook(() => usePlayerState());

    act(() => {
      result.current.updatePlayerState('left', 1);
    });

    const player = JSON.parse(localStorage.getItem('currentPlayer')!);
    expect(player.score).toBe(1);
  });

  test('should update player in the list of players in local storage', () => {
    const { result } = renderHook(() => usePlayerState());

    act(() => {
      result.current.updatePlayerState('left', 1);
    });

    const players = JSON.parse(localStorage.getItem('players')!);
    expect(players[0].score).toBe(1);
  });
});
