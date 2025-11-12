import styles from "@/components/Navbar/Navbar.module.css"
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import type { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"

type Props = {   
  topOfPage: boolean; 
  selectedPage: SelectedPage;
  setSelectedPage: (value:SelectedPage) => void;}
const Navbar = ({selectedPage, setSelectedPage, topOfPage}: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const navbarBG = topOfPage ? "" : "bg-[#FFE1E0] drop-shadow";
  return (
    <nav>
      <div className={`${navbarBG} ${styles.Navbar_Wrapper}`}>
        <div className={`${styles.Inner_div}`}>
          <div className={`${styles.Nabar_div}`}>
            {/* Left Side */}
            <div className="w-3/4">
              <img src={Logo} alt="Logo" className={`${styles.Logo_img} `}/>
            </div>
            {/* Right Side */}
            { isAboveMediumScreen ? (
            <div className={`${styles.Right_Side}`}>
              <div className={`${styles.Links}`}>
                <Link page="Home" 
                selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Benefits" 
                selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Our Classes" 
                selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact Us" 
                selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div>
              <div className={`${styles.Buttons}`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
              </div>
            </div>
            ) : (
            <button
            className="rounded-full bg-[#FFC132] p-1" onClick={() => {setMenuToggle(!menuToggle)}}>
              <Bars3Icon className="h-2 w-2 text-white" />
            </button>)
            }
        </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      {!isAboveMediumScreen && menuToggle ? (
        <div  className={`${styles.mobile_div} fixed right-0 bottom-0 z-100 h-full bg-[#FFE1E0] drop-shadow-xl`}>
          {/* close icon */}
          <div className="flex justify-end p-2">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              <XMarkIcon className="h-3 w-3 text-gray-400"/>
            </button>
          </div>
          {/* Menu items */}
          <div>
            <div className={`${styles.mobile_link} ml-[33%] flex flex-col gap-5`}>
                <Link page="Home" 
                selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Benefits" 
                selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Our Classes" 
                selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact Us" 
                selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div>
          </div>
        </div>
      ) : (
      <div> </div>)}
    </nav>
  )
}
export default Navbar;