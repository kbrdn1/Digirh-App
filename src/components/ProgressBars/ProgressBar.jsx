

const ProgressBar = ({ progress }) => {
  let progressColor = 'bg-primary'
  if (progress > 100) {
    progress = 100
  }

  if (progress > 75) {
    progressColor = '#4cb74c'
  } else if (progress > 50) {
    progressColor = '#3298ee'
  } else if (progress > 25) {
    progressColor = '#f0ad4e'
  } else {
    progressColor = '#d9534f'
  }

  return (
    <div>
      <span className='text-xs text-gray'>{progress + '%'}</span>
      <div className="bg-light-2 relative h-1 w-full rounded-2xl">
        <div
          className={`${progressColor} absolute top-0 left-0 flex h-1 items-center justify-center rounded-2xl text-xs font-semibold text-white font-nunito`}
          style={{ width: progress + '%', backgroundColor: progressColor }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
