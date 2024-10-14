import { act, renderHook } from '@testing-library/react';
import { useTextValidation } from './useTextValidation';

describe('useTextValidation', () => {
  test('should initialize with default values', () => {
    const { result } = renderHook(() => useTextValidation());
    expect(result.current.isValid).toBe(false);
  });

  test('should validate text', () => {
    const { result } = renderHook(() => useTextValidation());

    act(() => result.current.validateText(''));
    expect(result.current.isValid).toBe(false);

    act(() => result.current.validateText('username'));
    expect(result.current.isValid).toBe(true);

    act(() => result.current.validateText('username123'));
    expect(result.current.isValid).toBe(true);

    act(() => result.current.validateText('username@'));
    expect(result.current.isValid).toBe(false);

    act(() => result.current.validateText('username user'));
    expect(result.current.isValid).toBe(false);
  });
});
