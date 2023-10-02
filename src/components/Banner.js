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
      <div className='bg-main-banner bg-no-repeat bg-fixed bg-cover pt-12 h-[58vh] xs:bg-center sm:bg-center sm:py-6 xl:bg-center'>
        <AnimatedText text='Reparación y Servicio Técnico de Heladeras a domicilio en Capital Federal' className='pt-16 text-white !text-6xl text-center
           xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
        <div className='flex flex-col items-center justify-center'>
          <motion.p className='pt-16 text-3xl text-yellow-300 font-bold text-center sm:text-center sm:text-xl xs:hidden' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 2 }}>
            CONTÁCTENOS
          </motion.p>
          <div className='pb-2' >
            <motion.button onClick={handlePhoneClick} className='flex items-center flex-col bg-gradient-to-l from-green-400 via-green-600 to-green-800 text-white font-bold
               text-3xl px-3 py-3 rounded-xl sm:text-2xl sm:flex sm:justify-end' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <div className=''>
                <p className='hidden xs:block'>TOCÁ AQUÍ PARA LLAMAR</p>
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