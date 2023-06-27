import Title from "./Title"
import DeleteBtn from "../Buttons/Delete"
import AcceptBtn from "../Buttons/Accept"

const Default = (props) => {
  return (
    <div
      className={`relative bg-white shadow-xl rounded-[12px] ${
        full ? 'w-full' : 'w-[436px]'
      }`}
    >
      <Title color={color} title={title} />

      <div className="text-gray-5  font-bold text-[11px] flex flex-col pt-[60px] ">
        <div className=" text-[14px] flex flex-col pb-5 px-[50px]">
          <p className="font-franklin text-center"> {description} </p>
        </div>

        <div className="border-t border-light-2 flex flex-col pt-3 pb-3 ">
          <div className=" justify-center gap-y-2 flex space-x-5">
            <DeleteBtn content="NON" />
            <AcceptBtn content="OUI" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Default
