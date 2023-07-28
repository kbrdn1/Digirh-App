import React from 'react'

const Default = ({ title, description, children, footer, full }) => {
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

export default Default
