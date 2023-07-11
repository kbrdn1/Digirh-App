import PropTypes from 'prop-types'

const ProgressBar = ({ progress }) => {
  let progressColor = 'bg-primary'
  if (progress > 100) {
    progress = 100
  }

  if (progress == 100) {
    progressColor = 'bg-green-1'
  }

  return (
    <div>
      <div className="bg-light relative h-4 w-full rounded-2xl">
        <div
          className={`${progressColor} absolute top-0 left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-white`}
          style={{ width: progress + '%' }}
        >
          {progress + '%'}
        </div>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
}

export default ProgressBar
