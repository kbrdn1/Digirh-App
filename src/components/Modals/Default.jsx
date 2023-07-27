import Title from './Title'
import ToastError from '@components/Toasts/Error'

const Default = ({
  title,
  children,
  color,
  onSubmitAction,
  footer,
  error
}) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-y-scroll'>
      <div className="absolute md:left-1/2 md:top-1/2 top-10 md:-translate-x-1/2 md:-translate-y-1/2 z-40 w-full md:w-fit">
        <div
          className='relative bg-white shadow-xl rounded-[12px]'
        >
          <Title color={color} title={title} />

          <form
            className="text-gray-5 font-bold flex flex-col pt-16 "
            onSubmit={onSubmitAction}
          >
            <div className="gap-3 text-[14px] flex flex-col pb-5 px-[50px]">
              {children}
            {error && (
              <ToastError text={error} />
            )}
            </div>

            <div className="border-t border-light-2 flex p-3 gap-2 justify-end">
              {footer}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Default
