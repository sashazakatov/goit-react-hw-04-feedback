import { Component } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

 class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handelClick = (option) =>{
    this.setState((prevState)=>({
      [option]: prevState[option] + 1,
    }))
  }
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage = () => {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  }

  render(){
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
          gap: 10,
        }}
      >
        <Section title={"Please leave feedback"}>
          <FeedbackOptions options={Object.keys(this.state)} onClick={this.handelClick}></FeedbackOptions>
        </Section>
        <Section title={"Statistcs"}>
          {total === 0 ? 
            (<Notification message="There is no feedback"/>):
            (<Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={total} 
              positivePercentage={positivePercentage}/>
            )
          }
        </Section>
      </div>
    );
  }
};

export default App;