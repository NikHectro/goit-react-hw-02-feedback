import React from 'react';
import { Component } from 'react';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleBtnClick = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
      // [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  // handleGood = evt => {
  //   console.log(evt);
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // handleNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handleBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };
  render() {
    const keys = Object.keys(this.state);
    const values = Object.entries(this.state);
    console.log(values);
    return (
      <div>
        <h1>Please leave feedback</h1>
        {keys.map(key => (
          <button
            type="button"
            key={key}
            onClick={() => this.handleBtnClick(key)}
          >
            {key}
          </button>
        ))}

        {/* <button type="button" name="good" onClick={this.handleBtnClick}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleBtnClick}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleBtnClick}>
          Bad
        </button> */}

        <ul>
          {values.map(item => (
            <li className="reaction" key={item[0]}>
              <p>
                {item[0]}: {item[1]}
              </p>
            </li>
          ))}
        </ul>

        <span>Total: {this.countTotalFeedback()}</span>
        <span>
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </span>
      </div>
    );
  }
}
