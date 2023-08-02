import { forwardRef } from 'react'

import PropTypes from 'prop-types'

const Select = forwardRef((props, ref) => {
  const { full, options, ...rest } = props
  return (
    <select
      className={`font-nunito font-regular text-black placeholder:text-gray disabled:grayscale focus:outline focus:outline-2 focus:outline-primary valid:outline-valid invalid:outline-danger border border-gray rounded-md px-[16px] py-[14px] transition-all ${
        full ? 'w-full' : null
      }`}
      ref={ref}
      {...rest}
    >
      {options &&
        options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  )
})

Select.displayName = 'Select'

Select.propTypes = {
  full: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
}

export default Select
