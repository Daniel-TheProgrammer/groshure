import { useContext , useState } from "react"
import { MenuContext } from "./context" 
import logo from "../public/logo.jpg"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'
import MobileButton from "./mobilebutton"
import { AnimatePresence, motion } from "framer-motion"


export default function MenuNav (){

    const menucontext = useContext(MenuContext)

    const { open, isOpen } =  menucontext

    const [route] = useState(useRouter().route)

    const handleClick = () => {

        let body = document.getElementsByTagName("body")[0]

        if(!open ){
            body.style.overflow = 'hidden'
        }else{
            body.style.overflow = 'auto'
        }

        isOpen(!open)
    }
    const toggleOverflow = () => {

        let body = document.getElementsByTagName("body")[0]

        if(!open ){
            body.style.overflow = 'hidden'
        }else{
            body.style.overflow = 'auto'
        }

    }



    return (
            <div className='overlay absolute top-0 bottom-0 right-0 left-0 h-[200vh] w-100p bg-[rgba(0,0,0,0.2)] z-50 '>
                <AnimatePresence>
                <motion.div 
                        initial={{ opacity: 0, y:10 }}
                        animate={{ opacity: 1,y : 0 }}
                        exit={{ opacity: 0, y:10 }}
                        className='bg-white w-[93%]  rounded-[25px] my-3 relative mx-auto'>
                            <div className='flex px-5 py-3 items-center justify-between'>
                                <div>
                                    <Image src={logo} alt="logo"  />
                                </div>
                                <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center flex-col bg-[#F6F6F6]' onClick={handleClick}>
                                    <div className='border-[1px] border-black w-[14px] rotate-45 '></div>
                                    <div className='border-[1px] border-black w-[14px] -rotate-45 -translate-y-[2px] '></div>
                                </div>
                            </div>
                            <div className='text-center leading-[70px] font-[circularstd]'>
                                <ul>
                                    <li>
                                        <Link href="/"><a onClick={toggleOverflow} style={route === "/" ? { fontSize: "26px", color:"#100C2A", fontWeight:700 } : { fontSize: "26px", color: "#676767", fontWeight:400 } }>Home</a></Link>
                                    </li>
                                    <li>
                                        <a href='#features'  style={route === "/#features" ? { fontSize: "26px", color:"#100C2A", fontWeight:700 } : { fontSize: "26px", color: "#676767", fontWeight:400 } } onClick={toggleOverflow}>Features</a>
                                    </li>
                                    <li>
                                        <Link href="/about" ><a style={route === "/about" ? { fontSize: "26px", color:"#100C2A", fontWeight:700 } : { fontSize: "26px", color: "#676767", fontWeight:400 } } onClick={toggleOverflow}>About</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/contact"><a  style={route === "/contact" ? { fontSize: "26px", color:"#100C2A", fontWeight:700 } : { fontSize: "26px", color: "#676767", fontWeight:400 } } onClick={toggleOverflow}>Contact</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='pt-7 px-5 pb-[80px] '>
                                <MobileButton paddingTop={'15px'} paddingBottom={'15px'} backgroundColor="#FD4C5C" color='white' width="100%" borderRadius="25px" fontSize="16px" fontWeight={700} >
                                    Join waitlist
                                </MobileButton>
                            </div>
                        </motion.div>
                </AnimatePresence>
            </div>
    )

}
