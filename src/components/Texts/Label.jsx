import PropTypes from 'prop-types'

const Label = ({ text }) => {
  return <label className="color-gray-5 pb-1 font-franklin"> {text} </label>
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Label
