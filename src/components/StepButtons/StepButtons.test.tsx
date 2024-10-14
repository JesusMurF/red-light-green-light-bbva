import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StepButtonLeft, StepButtonRight } from './StepButtons';

describe('StepButton', () => {
  test('renders StepButtonLeft and triggers setDirection on click', () => {
    const setDirectionMock = jest.fn();
    render(<StepButtonLeft setDirection={setDirectionMock} />);

    const button = screen.getByText('Step left');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(setDirectionMock).toHaveBeenCalledTimes(1);
  });

  test('renders StepButtonRight and triggers setDirection on click', () => {
    const setDirectionMock = jest.fn();
    render(<StepButtonRight setDirection={setDirectionMock} />);

    const button = screen.getByText('Step right');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(setDirectionMock).toHaveBeenCalledTimes(1);
  });
});
