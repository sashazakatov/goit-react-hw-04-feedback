import { useState, useRef } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = useRef({good, neutral, bad})


  const feedbackHandler = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        Notify.failure("no feedback");
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / countTotalFeedback()) * good);
  }

  return(
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
      <FeedbackOptions options={Object.keys(feedback.current)} onClick={feedbackHandler}></FeedbackOptions>
    </Section>
    <Section title={"Statistcs"}>
      {countTotalFeedback() === 0 ? 
        (<Notification message="There is no feedback"/>):
        (<Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={countTotalFeedback()} 
          positivePercentage={countPositiveFeedbackPercentage()}/>
        )
      }
    </Section>
  </div>)
}
export default App;