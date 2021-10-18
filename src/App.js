import { useState } from 'react'
import './App.css'
import { Section } from './Components/Section/Section'

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleLeaveFeedback = (e) => {
    const btnName = e.target.name
    btnName === 'good'
      ? setGood(good + 1)
      : btnName === 'neutral'
      ? setNeutral(neutral + 1)
      : setBad(bad + 1)
  }

  const countTotalFeedback = good + neutral + bad

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback !== 0
      ? ((good * 100) / countTotalFeedback).toFixed(0)
      : ''

  const options = {
    good,
    neutral,
    bad,
    total: countTotalFeedback,
    positiveFeedback: countPositiveFeedbackPercentage(),
    handleLeaveFeedback,
  }

  return (
    <div className="App">
      <h1>hw-04-Hooks-Feedback</h1>
      <Section title="Please leave feedback" options={options} />
    </div>
  )
}
