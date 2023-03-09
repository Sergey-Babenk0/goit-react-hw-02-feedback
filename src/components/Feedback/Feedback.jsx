import React from 'react';

class Feedback extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 };

  goodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neytralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() > 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }

    return 0;
  };
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.goodFeedback}>
            Good
          </button>
          <button type="button" onClick={this.neytralFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.badFeedback}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>
              Good: <span>{this.state.good}</span>
            </li>
            <li>
              Neutral: <span>{this.state.neutral}</span>
            </li>
            <li>
              Bad: <span>{this.state.bad}</span>
            </li>
            <li>
              Total: <span>{this.countTotalFeedback()}</span>
            </li>
            <li>
              Positive feedback:{' '}
              <span>{this.countPositiveFeedbackPercentage()}</span>%
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
