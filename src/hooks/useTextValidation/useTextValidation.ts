import { useState, useCallback } from 'react';

export const useTextValidation = () => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const isValidText = useCallback((text: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(text);
  }, []);

  const validateText = useCallback(
    (text: string): boolean => {
      const valid = isValidText(text);
      setIsValid(valid);
      return valid;
    },
    [isValidText]
  );

  return { isValid, validateText };
};
