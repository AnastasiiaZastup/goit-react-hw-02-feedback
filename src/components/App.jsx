import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from './Section/Section';
import { Notofication } from './Notofication/Notofication';

export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  updateClicks = (option) => {              
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total !== 0) {
      return (good / total) * 100;
    }
  }


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivefeedback = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.updateClicks} />
          </Section>
         <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivefeedback}
            />
          ) : (
            <Notofication message={"There is no feedback"} />
          )}
       </Section>
      </div>
    );
  }
}
