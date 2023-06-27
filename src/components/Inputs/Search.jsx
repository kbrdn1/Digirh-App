import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = ({
  placeholder,
  disabled,
  full,
  autocomplete,
  required,
  autofocus,
  onSearch,
}) => {
  const [value, setValue] = React.useState('')

  const handleValue = (e) => {
    setValue(e.target.value)
  }

  const handleSearch = () => {
    onSearch(value)
  }

  return (
    <div
      className={`relative flex items-center hover:outline hover:outline-2 hover:outline-primary rounded-md transition-all ${
        full ? 'w-full' : 'w-fit'
      } ${disabled ? 'outline-none outline-0 grayscale' : null}`}
    >
      <input
        className="w-full font-nunito font-regular text-black placeholder:text-gray disabled:grayscale focus:outline focus:outline-2 focus:outline-primary valid:outline-valid invalid:outline-danger border border-gray rounded-md pl-[16px] pr-[45px] py-[14px] transition-all overflow-hidden"
        type="search"
        placeholder={placeholder}
        onChange={handleValue}
        disabled={disabled ? disabled : false}
        autoComplete={autocomplete ? autocomplete : null}
        required={required ? required : false}
        autoFocus={autofocus ? autofocus : false}
      />
      <div
        className="absolute flex items-center right-0 text-gray hover:text-white hover:bg-primary-hover px-[16px] h-full border-gray border-l rounded-r-md cursor-pointer transition-all"
        onClick={handleSearch}
      >
        <FontAwesomeIcon icon="search" />
      </div>
    </div>
  )
}

export default Search
