const File = ({
  accept,
  disabled,
  full,
  multiple,
  required,
  autofocus,
  handleValue,
}) => {
  const [file, setFile] = React.useState(null)

  const handleFile = (e) => {
    const file = e.target.files
    if (file) {
      setFile(file[0])
      handleValue(file[0])
    }
  }
  return (
    <input
      className={`font-nunito font-regular text-black placeholder:text-gray disabled:grayscale focus:outline focus:outline-2 focus:outline-primary valid:outline-valid invalid:outline-danger border border-gray rounded-md file:px-[16px] file:py-[14px] pr-[16px] transition-all  file:mr-4 file:border-0 file:text-sm file:font-semibold file:bg-primary-3 file:text-white hover:file:bg-primary-hover file:transition-all ${
        full ? 'w-full' : null
      }`}
      type="file"
      accept={accept}
      onChange={handleFile}
      disabled={disabled ? disabled : false}
      multiple={multiple ? multiple : false}
      required={required ? required : false}
      autoFocus={autofocus ? autofocus : false}
    />
  )
}

export default File
