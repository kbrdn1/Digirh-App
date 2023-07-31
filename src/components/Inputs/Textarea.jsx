const Textarea = ({
  defaultValue,
  placeholder,
  disabled,
  full,
  autocomplete,
  required,
  autofocus,
  onChangeValue,
  onRef,
}) => {
  return (
    <textarea
      className={`font-nunito font-regular text-black placeholder:text-gray disabled:grayscale focus:outline focus:outline-2 focus:outline-primary valid:outline-valid invalid:outline-danger border border-gray rounded-md px-[16px] py-[14px] transition-all ${
        full ? 'w-full' : null
      }`}
      placeholder={placeholder}
      disabled={disabled ? disabled : false}
      autoComplete={autocomplete ? autocomplete : null}
      required={required ? required : false}
      autoFocus={autofocus ? autofocus : false}
      onChange={onChangeValue}
      ref={onRef}
      {...(defaultValue && { defaultValue })}
      >
    </textarea>
  )
}

export default Textarea
