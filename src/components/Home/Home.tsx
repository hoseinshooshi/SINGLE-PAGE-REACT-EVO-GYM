
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const aboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section className={`py-3 md:pb-0 gap-6 bg-cyan-100 md:h-full`} id='home'>
        {/* Image and main header */}
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 '>
            {/* Main header */}
            <div className='z-10 mt-12 md:basis-3/5 '>
                {/* hedings */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0}
                }} 
                className='md:-mt-8 sm:items-center sm:mx-auto'>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 '>
                            <img src={HomePageText} alt="home page text" />
                        </div>
                    </div>
                    <p className='mt-4 text-sm md:text-start '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugiat itaque possimus temporibus debitis mollitia asperiores accusamus nostrum? Eligendi.
                    </p>
                </motion.div>
                {/* action button */}
                <div className='mt-4 flex items-center gap-5 md:justify-start sm:items-center'>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join now
                    </ActionButton>
                    <AnchorLink 
                    className='text-sm font-blod text-[#FF6B66] underline hover:text-[#FFC132]'
                    onClick={() => setSelectedPage(SelectedPage.ContactUS)}
                    href={`#${SelectedPage.ContactUS}`}>
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>
            <div className='flex basis-3/5 justify-center md:z-10 md:ml-20 md:mt-12 md:justift-items-end'>
                <img src={HomePageGraphic} alt="home page graphic" />
            </div>
        </motion.div>
        {/* SPNSORS */}
        {aboveMediumScreens && (
            <div className=' w-full bg-[#FFE1E0] py-4 '>
                <div className='mx-auto w-5/6 '>
                    <div className='flex items-center justify-between'>
                        <img src={SponsorRedBull} alt="sponsor redbull" />
                        <img src={SponsorFortune} alt="sponsor fortune" />
                        <img src={SponsorForbes} alt="sponsor forbes" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home