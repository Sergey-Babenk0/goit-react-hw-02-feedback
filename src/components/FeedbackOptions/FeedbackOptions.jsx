import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptionsStyle, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyle>
      {options.map((option, index) => (
        <Button key={index} type="button" onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </FeedbackOptionsStyle>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
