import { forwardRef } from 'react'

import PropTypes from 'prop-types'

const Checkbox = forwardRef((props, ref) => {
  const { full, children, ...rest } = props
  return (
    <div
      className={`flex gap-6 items-center ${
        full ? 'w-full' : 'w-fit'
      } relative ml-2`}
    >
      <input
        type="checkbox"
        className="w-0 h-0 outline-gray relative flex items-center justify-center cursor-pointer before:content-[''] before:absolute before:border before:h-5 before:w-5 before:rounded-lg after:content-[''] after:absolute after:h-3 after:w-3 after:rounded checked:after:bg-primary after:scale-0 after:checked:scale-100 disabled:checked:after:grayscale after:duration-200 after:ease-elastic before:duration-200 before:ease-out"
        {...rest}
        ref={ref}
      />
      <span>{children}</span>
    </div>
  )
})

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  full: PropTypes.bool,
  children: PropTypes.node,
  props: PropTypes.object
}

export default Checkbox
