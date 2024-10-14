import { act, renderHook } from '@testing-library/react';
import { useTrafficLights } from './useTrafficLights';

describe('useTrafficLights', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should initialize with default values', () => {
    const { result } = renderHook(() => useTrafficLights(1));
    expect(result.current.trafficLights).toBe('red');
  });

  test('should change traffic light', () => {
    const { result } = renderHook(() => useTrafficLights(1));
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(result.current.trafficLights).toBe('green');
  });
});
