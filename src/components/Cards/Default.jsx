import React from 'react'

import PropTypes from 'prop-types'

const Default = ({ title, description, footer, full, children }) => {
  return (
    <div
      className={`bg-white shadow-xl font-nunito flex flex-col rounded-[12px] ${
        full ? 'w-full' : 'w-fit'
      }`}
    >
      <div className="w-full py-[24px] pl-[40px] pr-[24px] flex flex-col justify-center gap-[12px] text-black font-franklin font-semibold text-lg border-b border-light-2">
        {title}
        {description ? <div>{description}</div> : null}
      </div>
      <div className="w-full py-[24px] px-[40px] text-gray font-semibold">
        {children}
      </div>
      <div className="flex flex-col sm:flex-row w-full py-5 px-3 sm:px-10 gap-3 border-t border-light-2">
        {footer}
      </div>
    </div>
  )
}

Default.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  footer: PropTypes.node.isRequired,
  full: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Default
