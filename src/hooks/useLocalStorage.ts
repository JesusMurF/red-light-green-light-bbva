import { useState, useEffect } from 'react';

type SetValue<T> = (value: T | ((val: T) => T)) => void;

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

const getFromLocalStorage = (key: string): string | null => {
  const value = localStorage.getItem(key);
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return value;
  }
};

const setToLocalStorage = (key: string, value: unknown): void => {
  if (typeof value === 'object' && value !== null) {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value as string);
};
