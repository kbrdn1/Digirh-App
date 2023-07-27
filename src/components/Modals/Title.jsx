import React from 'react'

const Title = ({ title, color }) => {
  return (
    <div
      className="w-[calc(100%-2rem)] mx-auto absolute -top-6 inset-x-0 p-5 rounded-xl text-white items-center justify-start shadow-lg shadow-black flex font-semibold font-franklin"
      style={{
        backgroundColor: `${color}`,
        boxShadow: `0 10px 15px -3px ${color}, 0 4px 6px -4px ${color}`,
        boxShadowOpacity: '0.1',
      }}
    >
      {title}
    </div>
  )
}

export default Title
