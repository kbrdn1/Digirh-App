import Title from './Title'
import ToastError from '@components/Toasts/Error'
import PropTypes from 'prop-types'

const Default = ({ title, children, color, onSubmit, footer, error }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-y-scroll text-start">
      <div className="absolute md:left-1/2 md:top-1/2 top-10 md:-translate-x-1/2 md:-translate-y-1/2 z-40 w-full md:w-fit">
        <div className="relative bg-white shadow-xl rounded-[12px]">
          <Title color={color} title={title} />

          <form
            className="text-gray-5 font-bold flex flex-col pt-16 "
            onSubmit={onSubmit}
          >
            <div className="gap-3 text-[14px] flex flex-col pb-5 px-[50px]">
              {children}
              {error && <ToastError message={error} />}
            </div>

            <div className="border-t border-light-2 flex py-5 px-3 sm:px-10 gap-2 justify-end flex-col-reverse sm:flex-row">
              {footer}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

Default.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  footer: PropTypes.node.isRequired,
  error: PropTypes.string,
}

export default Default
