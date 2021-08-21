import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './feedback-form.scss'

const FeedbackForm = props => {
    const {
        feedbackGetter
    } = props;

    const [feedbackdesc, setFeedbackdesc] = useState({
        value: ''
    });

    const [error, setError] = useState('');

    const handleChange = e => {
        let value = e.target.value;
        setFeedbackdesc({ value });
    }

    const handleSubmit = e => {
        let feedbackData = feedbackdesc.value.trim();

        if (feedbackData) {
            feedbackGetter(feedbackData);
            setFeedbackdesc({ value: '' });
            setError("")
        } else {
            setError("Error: Invalid comment!")
        }

        e.preventDefault();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="comment-box"
        >
            {error && <span className="error">{error}</span>}

            <label className="comment-label">
                Your feedback:
            </label>

            <textarea
                value={feedbackdesc.value}
                placeholder="Please add your comment here"
                className="comment-area"
                onChange={handleChange}
            />

            <button
                className="btn submit-btn medium-btn"
                type="submit"
                disabled={ feedbackdesc.value ? false : true }
            >Submit</button>
            
        </form>
    )
}

FeedbackForm.propTypes = {
    feedbackGetter: PropTypes.func
}

FeedbackForm.defaultProps = {
    feedbackGetter: () => { }
}

export default FeedbackForm

