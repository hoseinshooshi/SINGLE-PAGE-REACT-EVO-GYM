import { SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import {motion} from 'framer-motion'
import HText from "@/shared/HText"
import BenefitCard from "./BenefitCard"
import type { BenefitTypes } from "@/shared/types";
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
type Props = {
    setSelectedPage: (value:SelectedPage) => void; 
}
const benefitCards: Array<BenefitTypes> = [
    {
        icon: <HomeModernIcon className="h-5 w-5" />, 
        title: "State of the art", 
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nihil, expedita minus consequatur similique possimus nesciunt doloremque minima sit aliquid atque enim."
    }, 
    {
        icon: <UserGroupIcon className="h-5 w-5" />, 
        title: "100's of diverse classes", 
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nihil, expedita minus consequatur similique possimus nesciunt doloremque minima sit aliquid atque enim."
    }, 
    {
        icon: <AcademicCapIcon className="h-5 w-5" />, 
        title: "Expert and pro trainings", 
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nihil, expedita minus consequatur similique possimus nesciunt doloremque minima sit aliquid atque enim."
    }, 
]
const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits"
    className="mx-auto min-h-full w-5/6 py-12 bg-gray-100"
    >
        <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>
            {/* Header */}
            <div className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-3 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates explicabo repellat eos, fugit. Lorem ipsum, dolor sit amet adipisicing elit. Voluptates explicabo repellat eos, fugit</p>
            </div>
            {/* benefits */}
            <div className="md:flex items-center justify-between gap-5 mt-5">
                {benefitCards.map((benefitCard: BenefitTypes) => (
                    <BenefitCard
                    key={benefitCard.title}
                    icon={benefitCard.icon}
                    title={benefitCard.title}
                    desc={benefitCard.desc}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </div>
            {/* graphics and desc */}
            <div className="mt-10 items-center justify-between gap-10 md:mt-15 md:flex">
                {/* graphic */}
                <img src={BenefitsPageGraphic} alt="benefits graphic" className="mx-auto" />
                <div>
                    <div className="relative">
                        <div>
                            <div>
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-[#FF6B66]">FIT</span>
                                </HText>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="my-5 mb-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, esse non. Perferendis quasi cumque dolorem minus quibusdam, corrupti mollitia qui vero perspiciatis! Accusantium non minus, aliquam blanditiis consequuntur officia laudantium.</p>
                    </div>
                    <div className="relative mt-10">
                        <div>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits