import React, { useState } from 'react';
import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import FeedbackList from 'components/FeedbackList/FeedbackList';
import 'styles/app.scss';

const App = () => {
  const [feedbackComments, setFeedbackComments] = useState([]);

  const processFeedback = feedback => {
    // adding to the beginning to show recently added on top of the list
    setFeedbackComments([feedback,...feedbackComments]);
  }

  return (
    <div className="feedback-hub">
      <header className="app-header">
        <h1 className="app-title" >
          Feedback Hub
        </h1>
      </header>

      <section className="feedback-section">
        <FeedbackForm
          feedbackGetter={processFeedback}
        />
        <hr />
        <FeedbackList
          commentsList={feedbackComments}
        />
      </section>
    </div>
  );
}

export default App;
