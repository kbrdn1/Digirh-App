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
      <div className="w-full py-[20px] px-[40px] gap-[24px] border-t border-light-2">
        {footer}
      </div>
    </div>
  )
}

export default Default
