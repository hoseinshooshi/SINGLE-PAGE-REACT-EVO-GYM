import { SelectedPage, type ClassTypes } from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'
const classes:Array<ClassTypes> =[
    {
        name: "Weight Training Classes", 
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi exercitationem perspiciatis aliquam doloribus culpa", 
        img: image1
    }, 
    {
        name: "Training Classes", 
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi exercitationem perspiciatis aliquam doloribus culpa", 
        img: image2
    }, 
    {
        name: "fitness Classes", 
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi exercitationem perspiciatis aliquam doloribus culpa", 
        img: image3
    }, 
    {
        name: "adventure Classes", 
        img: image4
    }, 
    {
        name: "abCore Classes", 
        img: image5
    }, 
    {
        name: "Yoga Classes", 
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi exercitationem perspiciatis aliquam doloribus culpa", 
        img: image6
    }, 
]
type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section
    className='w-full bg-[#FFE1E0] py-20'
    id='ourclasses'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <div className='mx-auto w-5/6'>
                <div className='md:w-3/5'>
                    <HText>
                        Our Classe
                    </HText>
                    <p className='py-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur odit numquam dolores. Possimus eius corrupti perspiciatis
                    </p>
                </div>
            </div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap '>
                    {classes.map((item: ClassTypes,index) =>(
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            desc={item.desc}
                            img={item.img} />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses