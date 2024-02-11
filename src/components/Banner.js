"use client"
import React from 'react'
import Call from '../images/icono-llamada2.webp'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'

const Banner = () => {

  const phoneNumber = "1156367024";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <div className='bg-main-banner bg-no-repeat bg-fixed bg-cover pt-24 h-[73vh] flex flex-col items-center  xl:bg-center sm:bg-center sm:py-6 xs:py-0 xs:bg-center '>
        <AnimatedText text='Reparación y Servicio Técnico de Heladeras a domicilio en Capital Federal' className='pt-32 !text-5xl text-center
           xl:!text-4xl lg:!text-center lg:!text-4xl md:!text-5xl sm:!text-2xl sm:pt-40 xs:pt-28' />
        <div className='flex flex-col items-center justify-center'>
          <motion.p className='pt-16 text-3xl text-white font-bold text-center 2xl:hidden xl:hidden sm:text-center sm:text-xl xs:hidden ' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 2 }}>
            CONTÁCTENOS
          </motion.p>
          <div className='pb-2 xs:relative xs:bottom-12' >
            <motion.button onClick={handlePhoneClick} className='flex items-center flex-col bg-gradient-to-l from-blue-600 to-blue-800 text-white font-bold
               text-3xl px-2 py-2 rounded-xl sm:text-2xl sm:flex sm:justify-end lg:mt-12 xs:mt-16' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <div className=''>
                <p className='hidden sm:block xs:text-sm'>TOCÁ AQUÍ PARA LLAMAR</p>
                <img src={Call} alt="Ícono telefónico" className="mx-auto" />
              </div>
              1156367024
            </motion.button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner