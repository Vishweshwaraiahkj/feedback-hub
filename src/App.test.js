import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Feedback Hub title text', () => {
  render(<App />);
  const linkElement = screen.getByText(/feedback hub/i);
  expect(linkElement).toBeInTheDocument();
});
