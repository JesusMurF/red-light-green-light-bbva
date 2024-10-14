import { renderHook, act } from '@testing-library/react';
import { useCurrentPlayer } from './useCurrentPlayer';
import { useLocalStorage } from '../useLocalStorage/useLocalStorage';

jest.mock('../useLocalStorage/useLocalStorage');

describe('useCurrentPlayer', () => {
  const mockUseLocalStorage = useLocalStorage as jest.MockedFunction<
    typeof useLocalStorage
  >;

  beforeEach(() => {
    mockUseLocalStorage.mockReturnValue([
      { name: '', score: 0, highScore: 0 },
      jest.fn(),
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize with default player', () => {
    const { result } = renderHook(() => useCurrentPlayer());
    expect(result.current.currentPlayer).toEqual({
      name: '',
      score: 0,
      highScore: 0,
    });
  });

  test('should update currentPlayer', () => {
    const setCurrentPlayerMock = jest.fn();
    mockUseLocalStorage.mockReturnValue([
      { name: '', score: 0, highScore: 0 },
      setCurrentPlayerMock,
    ]);

    const { result } = renderHook(() => useCurrentPlayer());

    act(() => {
      result.current.setCurrentPlayer({
        name: 'Usuario',
        score: 10,
        highScore: 20,
      });
    });

    expect(setCurrentPlayerMock).toHaveBeenCalledWith({
      name: 'Usuario',
      score: 10,
      highScore: 20,
    });
  });
});
