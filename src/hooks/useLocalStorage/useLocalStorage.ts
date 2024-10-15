import { useState, useEffect } from 'react';

type SetValue<T> = (value: T | ((val: T) => T)) => void;

/**
 * Set and get values from local storage
 * @param {string} storageKey - Key to store the value
 * @param {generic} initialValue - Initial value to store
 * @returns storageValue and setStorageValue
 */
export const useLocalStorage = <T>(
  storageKey: string,
  initialValue?: T
): [T, SetValue<T>] => {
  const [storageValue, setStorageValue] = useState<T>(() => {
    const storedValue = getFromLocalStorage(storageKey) as T | null;
    return storedValue !== null ? storedValue : (initialValue as T);
  });

  useEffect(() => {
    setToLocalStorage(storageKey, storageValue);
  }, [storageValue, storageKey]);

  return [storageValue, setStorageValue];
};

/**
 * Helper function to get values from local storage
 * @param {string} key - Key to get the value
 * @returns value
 */
const getFromLocalStorage = (key: string): string | null => {
  const value = localStorage.getItem(key);
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return value;
  }
};

/**
 * Helper function to set values to local storage
 * @param key - Key to store the value
 * @param value - Value to store
 */
const setToLocalStorage = (key: string, value: unknown): void => {
  if (typeof value === 'object' && value !== null) {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value as string);
};
