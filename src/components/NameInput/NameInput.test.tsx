import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NameInput } from './NameInput';

describe('NameInput', () => {
  test('renders NameInput component', () => {
    render(
      <NameInput
        isValid={true}
        onChange={() => {}}
        onKeyDown={() => {}}
        value=""
      />
    );
    const inputElement = screen.getByTestId('name-input');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange when the input value changes', () => {
    const handleChange = jest.fn();
    render(
      <NameInput
        isValid={true}
        onChange={handleChange}
        onKeyDown={() => {}}
        value=""
      />
    );
    const inputElement = screen.getByTestId('name-input');
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('calls onKeyDown when a key is pressed', () => {
    const handleKeyDown = jest.fn();
    render(
      <NameInput
        isValid={true}
        onChange={() => {}}
        onKeyDown={handleKeyDown}
        value=""
      />
    );
    const inputElement = screen.getByTestId('name-input');
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });

  test('shows an error message when the input is invalid', () => {
    render(
      <NameInput
        isValid={false}
        onChange={() => {}}
        onKeyDown={() => {}}
        value="invalid value"
      />
    );
    const errorMessage = screen.getByText(
      'El usuario no es válido, introduce solamente carácteres alfanúmericos.'
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test('does not show an error message when the input is valid', () => {
    render(
      <NameInput
        isValid={true}
        onChange={() => {}}
        onKeyDown={() => {}}
        value="validvalue"
      />
    );
    const errorMessage = screen.queryByText(
      'El usuario no es válido, introduce solamente carácteres alfanúmericos.'
    );
    expect(errorMessage).not.toBeInTheDocument();
  });
});
