import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RedLight } from './RedLight';

describe('GreenLight', () => {
  test('renders GreenLight component', () => {
    render(<RedLight />);
    const greenLightElement = screen.getByTestId('red-light');
    expect(greenLightElement).toBeInTheDocument();
  });

  test('renders RedLight component with custom size', () => {
    render(<RedLight size="large" />);
    const greenLightElement = screen.getByTestId('red-light');
    expect(greenLightElement).toHaveClass('title--large');
  });

  test('renders RedLight component with italic style', () => {
    render(<RedLight italic />);
    const greenLightElement = screen.getByTestId('red-light');
    expect(greenLightElement).toHaveClass('title--italic');
  });

  test('renders RedLight component with animated style', () => {
    render(<RedLight animated />);
    const greenLightElement = screen.getByTestId('red-light');
    expect(greenLightElement).toHaveClass('animated');
  });

  test('renders RedLight component with active style', () => {
    render(<RedLight isActive />);
    const greenLightElement = screen.getByTestId('red-light');
    expect(greenLightElement).toHaveClass('title--red');
  });
});
