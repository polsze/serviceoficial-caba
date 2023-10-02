"use client"
import React from 'react'
import Icono1 from '../images/icono2.webp'
import Icono2 from '../images/icono1.webp'
import Icono3 from '../images/icono3.webp'
import { motion } from 'framer-motion'
import { BannerThree } from './BannerSm'

const BrandsSection = () => {

  const phoneNumber = "1156367024";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <BannerThree />
      <section className='py-12 flex items-center xs:py-2'>
        <div className='w-[90%] h-auto rounded-r-full bg-footer-image 2xl:w-full sm:w-[97%] '>
          <div className='flex flex-row justify-evenly pt-10 sm:justify-center sm:flex-wrap sm:pr-20 sm:pb-16'>
            <div className='flex flex-col items-center'>
              <img src={Icono1} alt="" className='Servicio a domicilio en Capital Federal' />
              <p className=' text-white text-2xl font-bold text-center 2xl:text-lg lg:text-2xl sm:text-lg '>Servicio directo a domicilio en Capital Federal</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={Icono2} alt="Atención telefónica" className='' />
              <p className=' text-white text-2xl font-bold text-center 2xl:text-lg lg:text-2xl sm:text-lg'>Atención telefónica inmediata</p>
              <div className=''>
                <div className='pb-2'>
                  <motion.button className='bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500 text-white  font-bold text-2xl px-3 py-2 rounded-xl 
                  sm:text-2xl sm:flex sm:justify-end'
                    onClick={handlePhoneClick}>
                    LLAMANOS!
                  </motion.button>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center '>
              <img src={Icono3} alt="Todas las marcas de Heladera" className='' />
              <p className=' text-white text-2xl font-bold text-center 2xl:text-lg lg:pr-2 lg:text-2xl sm:text-lg sm:w-1/2'>Todas las marcas</p>
            </div>
          </div>
        </div>
      </section>
      <div className='flex'>
        <div className='w-full flex items-center flex-col shadow-xl bg-fnd-image bg-no-repeat bg-cover bg-bottom'>
          <h4 className='text-center py-4 text-4xl font-bold xs:text-3xl'>¿Problemas con tu heladera? <span className='text-green-500'>Contáctanos</span></h4>
          <ul className='pb-8 text-2xl xs:text-lg xs:ml-6 sm:text-2xl'>
            <li className='text-xl list-disc pb-1'>Compresor defectuoso</li>
            <li className='text-xl list-disc pb-1'>Problemas eléctricos</li>
            <li className='text-xl list-disc pb-1'>Termostato averiado</li>
            <li className='text-xl list-disc pb-1'>Obstrucción en las bobinas del condensador</li>
            <li className='text-xl list-disc pb-1'>Fallo en el ventilador del evaporador</li>
            <li className='text-xl list-disc pb-1'>Sello de la puerta dañado</li>
            <li className='text-xl list-disc pb-1'>Acumulación de hielo en el evaporador</li>
            <li className='text-xl list-disc pb-1'>Filtro de agua obstruido</li>
            <li className='text-xl list-disc pb-1'>Válvula de agua con fugas</li>
            <li className='text-xl list-disc'>Problemas con el sistema de descongelación</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default BrandsSection



