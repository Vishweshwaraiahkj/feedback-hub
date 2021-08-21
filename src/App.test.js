import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import FeedbackList from 'components/FeedbackList/FeedbackList';

test('renders Feedback Hub title text', () => {
  render(<App />);
  const linkElement = screen.getByText(/feedback hub/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Feedback Form', () => {
  const processFeedback = jest.fn();
  render(<FeedbackForm feedbackGetter={processFeedback}/>);
  const Element = screen.getByText(/submit/i);
  expect(Element).toBeInTheDocument();
  fireEvent.click(Element);
});

test('renders Feedback List', () => {
  const commentsList = [];
  render(<FeedbackList commentsList={commentsList}/>);
  const Element = screen.getByTestId('comments-list');
  expect(Element).toBeInTheDocument();
});