import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.css'

export function FeedbackOptions({ btnNames, onLeaveFeedback }) {
  return (
    <>
      {btnNames.map((btnName) => (
        <button
          className={s.btn}
          type="button"
          name={btnName.toLowerCase()}
          onClick={onLeaveFeedback}
        >
          {btnName}
        </button>
      ))}
    </>
  )
}

FeedbackOptions.defaultProps = {
  btnNames: ['Good', 'Neutral', 'Bad'],
  onLeaveFeedback: '',
}

FeedbackOptions.propTypes = {
  btnNames: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
}
