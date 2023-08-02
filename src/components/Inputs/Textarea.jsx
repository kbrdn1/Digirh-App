import { forwardRef } from 'react'

import PropTypes from 'prop-types'

const Textarea = forwardRef((props, ref) => {
  const { full, ...rest } = props
  return (
    <textarea
      className={`font-nunito font-regular text-black placeholder:text-gray disabled:grayscale focus:outline focus:outline-2 focus:outline-primary valid:outline-valid invalid:outline-danger border border-gray rounded-md px-[16px] py-[14px] transition-all ${
        full ? 'w-full' : 'w-fit'
      }`}
      ref={ref}
      {...rest}
    ></textarea>
  )
})

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
  full: PropTypes.bool,
}

export default Textarea
