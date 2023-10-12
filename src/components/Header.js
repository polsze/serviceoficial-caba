"use client"
import React from 'react'
import { motion } from "framer-motion"
import Logo from '../images/serviceoficial-caba-logo.webp'
import Call from '../images/icono-llamada.webp'
import Wsp from '../images/whatsapp-logo.webp'
import Phone from '../images/llamada-logo.webp'

const Header = () => {

  const phoneNumber = "1156367024";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <header className='flex flex-row overflow-hidden w-full'>

        <div className="w-full h-32 bg-white flex items-center xs:h-16" >
          <motion.div className="lg:absolute lg:pt-4 lg:-left-20 xs:-left-24 xs:ml-4 xs:pt-8 " initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 100 }}
            transition={{ ease: "easeOut", duration: 1 }}>
            <img src={Logo} alt="Service Oficial Caba Logo" className='xs:w-28 xs:h-28 ' />
          </motion.div>
          <div className='mx-auto xl:w-1/2 xl:pr-0 lg:w-1/2 lg:absolute lg:right-2 lg:pr-0 xs:pt-3'>
            <motion.p className='text-black font-bold text-xl 2xl:text-3xl sm:text-sm' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 2 }}><b className='text-orange-600'>
                Horarios de Atención:</b> Lunes a Sábados de 9:00 a 20:00hs
            </motion.p>
          </div>
          <div className='2xl:hidden xl:hidden lg:hidden' >
            <motion.div className='flex flex-row items-center sm:hidden' initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: -120 }}
              transition={{ ease: "easeOut", duration: 1 }} >
              <img src={Call} alt="Ícono telefónico" className="mr-4" />
              <motion.button className="bg-gradient-to-b from-blue-600 to-blue-800 text-white font-bold text-2xl px-3 py-2 rounded-xl sm:text-2xl sm:flex sm:justify-end"
                onClick={handlePhoneClick}>
                1156367024
              </motion.button>
            </motion.div>
          </div>
        </div>

        <div className='fixed right-0 bottom-0 z-10'
        >
          <a href="https://api.whatsapp.com/send?phone=541156367024" target={'_blank'} rel="noreferrer">
            <img src={Wsp} alt="Whatsapp logo" className='w-24 h-24 sm:w-20 sm:h-20 xs:w-16 xs:h-16' />
          </a>
        </div>

        <div className='fixed left-2 bottom-3 z-20 hidden sm:block'
          onClick={handlePhoneClick}>
          <img src={Phone} alt="Ícono telefónico" className='w-24 h-24 sm:w-16 sm:h-16 xs:w-12 xs:h-12' />
        </div>

      </header>
    </>
  )
}

export default Header