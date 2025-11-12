import { li } from "framer-motion/client"

type Props = {
    name:string, 
    desc?:string, 
    img: string
}
const overlayStyles = `p-5 absolute z-15 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-cyan-100 text-center text-[#5E0000] opacity-0 transition duration-500 hover:opacity-90`
const Class = ({name, desc, img}: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={`${overlayStyles}`}>
            <p className="font-bold text-2xl font-mono ">{name}</p>
            <p className="mt-5">{desc}</p>
        </div>
        <img src={img} alt="image" />
    </li>

  )
}

export default Class