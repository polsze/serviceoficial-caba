"use client"
import React from 'react'
import  { AnimatedTextNew } from './AnimatedText'
import { motion } from 'framer-motion'
import BrandsSlider from './BrandsSlider'
import { AnimatedTextTitle } from './AnimatedTextTitle'




const BannerSmall = () => {
  return (
    <>
      <div className='h-16 flex flex-row items-center pt-2 px-1 bg-gradient-to-t from-blue-700 to-black shadow sm:h-20'>
        <AnimatedTextTitle className=' text-white !text-3xl text-center xl:!text-3xl 
        lg:!text-center lg:!text-2xl md:!text-5xl sm:!text-xl xs:!text-lg' />
      </div>
      <div className='flex flex-col items-center bg-gray-200'>
        <div className='mx-auto w-[70%] h-auto rounded-lg sm:rounded-none sm:w-[100%]' initial={{ x: 0, y: 60, opacity: 0 }} animate={{ x: 0, y: -15, opacity: 1 }}
          transition={{ ease: "easeOut", duration: .5 }} exit={{ opacity: 0 }}>
          <BrandsSlider />
        </div>
      </div>
    </>
  )
}

export const BannerTwo = () => {
  return (
    <>
      <div className='h-16 pt-2 flex flex-row items-center shadow-xl sm:h-20 bg-gradient-to-t from-blue-700 to-black'>
        <motion.div className='' initial={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 2 }} animate={{ opacity: 1 }}>
        </motion.div>
        <AnimatedTextNew text='NOS ESFORZAMOS PARA BRINDARTE EL MEJOR SERVICIO, ¡CONTACTANOS!'
          className=' text-white !text-3xl text-center xl:!text-3xl 
                      lg:!text-center lg:!text-2xl md:!text-5xl sm:!text-xl sm:px-2 xs:!text-lg' />
      </div>
    </>
  )
}

export const BannerThree = () => {
  return (
    <>
      <div className='h-16 flex flex-row items-center shadow-xl bg-gradient-to-t from-blue-700 to-black'>
        <motion.div className='' initial={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 2 }} animate={{ opacity: 1 }}>
        </motion.div>
        <AnimatedTextNew text='OFRECEMOS UN SERVICIO RÁPIDO Y CONFIABLE' className='pt-0 text-white !text-3xl text-center xl:!text-3xl 
        lg:!text-center lg:!text-2xl md:!text-5xl sm:!text-xl xs:!text-lg' />
      </div>
    </>
  )
}

export default BannerSmall