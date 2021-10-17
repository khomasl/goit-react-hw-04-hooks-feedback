import PropTypes from 'prop-types'
import s from './Section.module.css'
import { Statistics } from '../Statistics/Statistics'
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions'

export function Section({ title, options }) {
  const btnNames = ['Good', 'Neutral', 'Bad']
  return (
    <section className={s.statistics}>
      {<h2 className={s.title}>{title}</h2>}
      <FeedbackOptions
        btnNames={btnNames}
        onLeaveFeedback={options.handleLeaveFeedback}
      />
      <Statistics options={options} />
    </section>
  )
}

Section.defaultProps = {
  title: 'Please leave feedback',
  options: {
    good: 0,
    neutral: 0,
    bad: 0,
  },
}

Section.propTypes = {
  title: PropTypes.string,
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.string,
    handleLeaveFeedback: PropTypes.func,
  }),
}
