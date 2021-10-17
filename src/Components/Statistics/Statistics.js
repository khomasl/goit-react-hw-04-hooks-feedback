import PropTypes from 'prop-types'
import s from './Statistics.module.css'
import { Notification } from '../Notification/Notification'

export const Statistics = ({ options }) => (
  <>
    <h2 className={s.title}>Statistics</h2>
    {options.total === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <StatisticsShow options={options} />
    )}
  </>
)

function StatisticsShow({ options }) {
  const { good, neutral, bad, total, positiveFeedback } = options
  return (
    <>
      <p className={s.good}>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={s.bad}>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span className={s.total}>{total}</span>
      </p>
      <p className={s.percentageP}>
        Positive feedback:{' '}
        <span className={s.percentage}>{positiveFeedback}%</span>
      </p>
    </>
  )
}

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positiveFeedback: '',
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.string,
  handleLeaveFeedback: PropTypes.func,
}
