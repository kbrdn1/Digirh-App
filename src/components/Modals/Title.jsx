import React from 'react'

const Title = ({ title, color }) => {
  return (
    <div
      className="absolute boxShadow -top-[1rem] py-[12px] px-[24px] w-[90%] flex -translate-x-1/2 left-1/2 rounded-xl text-white text-[1rem] shadow-lg "
      style={{ backgroundColor: `${color}`, boxShadow: `0 4px 6px ${color}` }}
    >
      {title}
    </div>
  )
}

export default Title
