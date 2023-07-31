import React from 'react';

const Checkbox = ({
    text,
    disabled,
    defaultValue,
    onChangeValue,
    onRef,
    full,
    required,
}) => {
    return (
      <div
        className={`flex gap-6 items-center ${
          full ? 'w-full' : 'w-fit'
        } relative`}
      >
        <input
          type="checkbox"
          className="w-0 h-0 outline-gray relative flex items-center justify-center cursor-pointer before:content-[''] before:absolute before:border before:h-5 before:w-5 before:rounded-lg after:content-[''] after:absolute after:h-3 after:w-3 after:rounded checked:after:bg-primary after:scale-0 after:checked:scale-100 disabled:checked:after:grayscale after:duration-200 after:ease-elastic before:duration-200 before:ease-out"
          disabled={disabled ? disabled : false}
          required={required ? required : false}
          onChange={onChangeValue}
          ref={onRef}
          defaultChecked={defaultValue}
        />
        <span>{text}</span>
      </div>
    )
};

export default Checkbox;