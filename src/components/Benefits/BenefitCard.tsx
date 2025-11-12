import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
    icon:JSX.Element;
    title: string; 
    desc: string;
}

const BenefitCard = ({setSelectedPage,icon, title, desc}: Props) => {
  return (
    <div className='mt-5 rounded-md border-2 border-gray-400 px-4 py-9 text-center'>
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-400 bg-[#FFE1E0] p-4'>
                {icon}
            </div>
        </div>
        <h4 className="font-bold">{title} </h4>
        <p className="my-3">{desc}</p>
        <AnchorLink 
        className='text-sm font-blod text-[#FF6B66] underline hover:text-[#FFC132]'
        onClick={() => setSelectedPage(SelectedPage.ContactUS)}
        href={`#${SelectedPage.ContactUS}`}>
            <p>Learn More</p>
        </AnchorLink>
    </div>
  )
}

export default BenefitCard