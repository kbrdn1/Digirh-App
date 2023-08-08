import { forwardRef } from 'react'

import PropTypes from 'prop-types'

const File = forwardRef((props, ref) => {
  const { full, ...rest } = props

  return (
    <input
      className={`font-nunito font-regular text-black placeholder:text-gray disabled:grayscale focus:outline focus:outline-2 focus:outline-primary valid:outline-valid invalid:outline-danger border border-gray rounded-md file:px-[16px] file:py-[14px] pr-[16px] transition-all  file:mr-4 file:border-0 file:text-sm file:font-semibold file:bg-primary-3 file:text-white hover:file:bg-primary-hover file:transition-all ${
        full ? 'w-full' : 'w-fit'
      }`}
      type="file"
      ref={ref}
      {...rest}
    />
  )
})

File.displayName = 'File'

File.propTypes = {
  full: PropTypes.bool,
  props: PropTypes.object,
}

export default File
