import React from 'react'
import PropTypes from 'prop-types'
import './feedback-list.scss'

const FeedbackList = props => {
    const {
        commentsList
    } = props;

    return (
        <>
            <h1 className="comments-list-title">List of Comments</h1>
            <ul className="comments-list" data-testid="comments-list" >
                {commentsList.length ?
                    commentsList.map((item, idx) => {
                        return (
                            <li key={idx} >
                                <label>{idx + 1}</label>
                                <span>{item}</span>
                            </li>
                        )
                    }) :
                    <li className="no-results">No Feedbacks yet!</li>}
            </ul>
        </>
    )
}

FeedbackList.propTypes = {
    commentsList: PropTypes.instanceOf(Array)
}

FeedbackList.defaultProps = {
    commentsList: []
}

export default FeedbackList

