import React from 'react'
import Ref from '../images/serviceoficial-caba-logo.webp'
import { motion } from 'framer-motion'

const FooterSection = () => {
  const phoneNumber = "1156367024"; // Número de teléfono para realizar la llamada

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
      <footer className=' bg-gray-200 h-auto flex flex-row justify-around items-center lg:flex-wrap sm:flex-wrap xs:justify-center' >
        <div className='relative right-4 2xl:right-0 xs:right-4 xs:hidden'>
          <img src={Ref} alt="Service Oficial Caba Logo" className=' 2xl:w-44 2xl:h-44 sm:w-24 sm:h-24' />
        </div>
        <div className=''>
          <ul className='text-black pt- 2xl:pl-8 2xl:pt-4 sm:pt-4 xs:pl-0'>
            <p className='text-2xl text-center text-green-500 font-bold sm:text-2lg '>Horarios de Atención:</p>
            <li className='list-disc sm:text-lg 2xl:text-2xl'>Lunes a Viernes: 9:00 a 20:00hs</li>
            <li className='list-disc sm:text-lg 2xl:text-2xl'>Sábados: 9:00 a 16:00hs.</li>
            <li className='list-disc sm:text-lg sm:pb-4 2xl:text-2xl'>Domingos y Feriados: Cerrado</li>
          </ul>
        </div>

        <div className='text-gray-300'>

          <div className='2xl:pl-4 xs:pl-0 xs:flex xs:items-center xs:flex-col'>

            <span className='text-black text-2xl'>CONTACTO: </span>
            <motion.button className="text-white bg-gradient-to-b from-emerald-400 to-emerald-800  font-bold text-2xl px-3 py-2 rounded-xl sm:text-2xl sm:flex sm:justify-end"
              onClick={handlePhoneClick}>
              1156367024
            </motion.button>

            <h6 className='font-bold text-xl text-center text-green-500 2xl:pl-2 sm:text-lg xs:pl-0 xs:text-sm xs:mb-2'>¡GRACIAS POR CONFIAR EN NOSOTROS!</h6>
          </div>
        </div>
      </footer>
      <div className='h-12 bg-gray-950 text-white flex items-center text-lg justify-center 2xl:text-2xl lg:text-center lg:text-xl sm:h-16 sm:text-sm sm:px-2 '>
        Todos los logos y marcas representadas en la página son propiedad únicamente de cada fabricante.
      </div>
      <div className='h-12 bg-gray-900 text-white decoration-none flex items-center justify-center sm:px-2 sm:text-xs sm:text-center 2xl:text-xl'>
        <a href="https://pablobarriosportfolio-blond.vercel.app/" target="_blank" className='font-bold decoration-transparent' rel="noreferrer">PBX Web Design</a>
      </div>

    </>
  )
}

export default FooterSection