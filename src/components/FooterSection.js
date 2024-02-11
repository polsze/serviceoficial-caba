import React from 'react'
import Ref from '../images/mecanico.png'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';


const FooterSection = () => {
  const phoneNumber = "1156367024"; // Número de teléfono para realizar la llamada

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
      <footer className='h-auto flex flex-row justify-around items-center lg:flex-wrap sm:flex-col sm:flex-wrap xs:justify-center ' >

        <div className=''>
          <img src={Ref} alt="Service Oficial-CABA reparacion de heladeras en Capital Federal" className='xs:mt-2 xs:pr-12' />
        </div>

        <div className=''>
          <ul className='text-black 2xl:pl-8 2xl:pt-4 sm:py-4 xs:pl-0'>
            <li className=' pt-2 text-xl text-center text-green-500 font-bold sm:text-2lg sm:text-lg'>Horarios de Atención:</li>
            <li className='list-disc '>Lunes a Viernes: 9:00 a 20:00hs</li>
            <li className='list-disc '>Sábados: 9:00 a 16:00hs.</li>
            <li className='list-disc  sm:lib-4'>Domingos y Feriados: Cerrado</li>
          </ul>
        </div>


          <div className='2xl:pl-4 xs:pl-0 sm:flex sm:justify-center sm:flex-col'>

            <span className='text-black text-xl text-center'>CONTACTO: </span>
            <motion.button className="text-white bg-gradient-to-b from-emerald-400 to-emerald-800 m-auto font-bold text-2xl px-3 py-2 rounded-xl sm:text-2xl sm:flex sm:justify-end"
              onClick={handlePhoneClick}>
              1156367024
            </motion.button>

            <h6 className='font-bold text-lg text-center text-green-500 2xl:pl-2 sm:text-md xs:pl-0 xs:text-sm xs:mb-2'>¡GRACIAS POR CONFIAR EN NOSOTROS!</h6>
          </div>
      </footer>
      <div className='h-12 bg-gray-950 text-white flex items-center text-lg justify-center 2xl:text-2xl lg:text-center lg:text-xl sm:h-16 sm:text-sm sm:px-2 '>
        Todos los logos y marcas representadas en la página son propiedad únicamente de cada fabricante.
      </div>
      <div className='h-12 bg-gray-900  text-white decoration-none flex items-center justify-center flex-col sm:px-2 sm:text-xs sm:text-center 2xl:text-xl'>
        <a href="https://pbx-six.vercel.app/" target="_blank" className='font-bold decoration-transparent' rel="noreferrer">PBX Web Design</a>
        
      </div>
      <div className='flex items-center justify-center bg-gray-900'>
      <a href='#'>
        <Icon icon="icon-park:arrow-circle-up" height={40} className='py-1' />
        </a>
      </div>

    </>
  )
}

export default FooterSection