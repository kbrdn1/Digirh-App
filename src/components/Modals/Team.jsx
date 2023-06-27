import Input from '@components/Inputs/Default'
import Label from '@components/Texts/Label'
import Title from '@components/Modals/Title'

const Team = ({
  title,
  name,
  description,
  min_person,
  is_active,
  footer,
  color,
  full,
}) => {
  return (
    <div
      className={`relative bg-white shadow-xl rounded-[12px] ${
        full ? 'w-full' : 'w-[436px]'
      }`}
    >
      <Title color={color} title={title} />

      <div className="text-gray-5  font-bold text-[11px] flex flex-col pt-[60px] ">
        <div className="flex flex-col px-[50px] pb-5">
          <Label text="NOM" />
          <Input type="text" />
        </div>

        <div className="flex flex-col pb-5 px-[50px]">
          <Label text="DESCRIPTION" />
          <Input type="text" />
        </div>

        <div className="flex flex-col pb-5 px-[50px] pb-5 ">
          <Label text="EFFECTIF MINIMUM" />
          <Input type="number" />
        </div>

        <div className="text-[16px] text-gray-3 flex pb-8 px-[50px]">
          <Input type="checkbox" />
          <label className="pl-[8px] font-light">Equipe active</label>
        </div>
      </div>

      <div className="w-full py-[20px] px-[40px] gap-[24px] border-t border-light-2">
        {footer}
      </div>
    </div>
  )
}

export default Team
