import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GreenLight } from './GreenLight';

describe('GreenLight', () => {
  test('renders GreenLight component', () => {
    render(<GreenLight />);
    const greenLightElement = screen.getByTestId('green-light');
    expect(greenLightElement).toBeInTheDocument();
  });

  test('renders GreenLight component with custom size', () => {
    render(<GreenLight size="large" />);
    const greenLightElement = screen.getByTestId('green-light');
    expect(greenLightElement).toHaveClass('title--large');
  });

  test('renders GreenLight component with italic style', () => {
    render(<GreenLight italic />);
    const greenLightElement = screen.getByTestId('green-light');
    expect(greenLightElement).toHaveClass('title--italic');
  });

  test('renders GreenLight component with animated style', () => {
    render(<GreenLight animated />);
    const greenLightElement = screen.getByTestId('green-light');
    expect(greenLightElement).toHaveClass('animated');
  });

  test('renders GreenLight component with active style', () => {
    render(<GreenLight isActive />);
    const greenLightElement = screen.getByTestId('green-light');
    expect(greenLightElement).toHaveClass('title--green');
  });
});
