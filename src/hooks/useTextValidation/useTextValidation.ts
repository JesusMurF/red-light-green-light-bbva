import { useState, useCallback } from 'react';

/**
 * Validate text given by the user
 * @returns {Object} - isValid and validateText function
 */
export const useTextValidation = () => {
  const [isValid, setIsValid] = useState<boolean>(false);

  /**
   * Condition to check if the text is valid
   * @param {string} text - The text to validate
   */
  const isValidText = useCallback((text: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(text);
  }, []);

  /**
   * Validates the text and sets the isValid state
   * @param {string} text - The text to validate
   * @returns {boolean} - The result of the validation
   */
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
