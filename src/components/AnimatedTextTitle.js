import React from 'react'
import { motion } from 'framer-motion'

export const AnimatedTextTitle = () => {

  const titulo = "REPUESTOS ORIGINALES - GARANTÍA ESCRITA - DIAGNÓSTICO INCLUÍDO - TODAS LAS MARCAS"

  const sentence = {
    hidden: {
      opacity: 1,

    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.03,
      },
    },
  }

  const letter = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <>
      <div className='w-full mx-auto py-2 flex items-center  justify-center text-center overflow-hidden sm:py-0'>
        <div >
          <motion.h2
            variants={sentence}
            initial="hidden"
            animate="visible"
            className='text-center text-white text-2xl  2xl:text-3xl xl:text-2xl sm:text-lg'
          >
            {titulo.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })
            }
          </motion.h2>
        </div>
      </div>
    </>
  )
}
