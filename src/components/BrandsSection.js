"use client"
import React from 'react'
import Icono1 from '../images/icono2.webp'
import Icono2 from '../images/icono1.webp'
import Icono3 from '../images/icono3.webp'
import { BannerThree } from './BannerSm'

const BrandsSection = () => {

  const arrayBanner = [
    {
      img: Icono1,
      alt: "Servicio tecnico de heladeras a domicilio en Capital Federal",
      descripcion: "Servicio en Capital Federal"
    },
    {
      img: Icono2,
      alt: "Atención telefónica",
      descripcion: "Atención telefónica inmediata"
    },
    {
      img: Icono3,
      alt: "Reparacion y Servicio Tecnico de todas las marcas de Heladera",
      descripcion: "Todas las marcas"
    },
  ]

  return (
    <>
      <BannerThree />
      <section className='py-12 flex items-center bg-gray-200 xs:py-2'>
        <div className='w-[90%]  h-auto rounded-r-full bg-footer-image 2xl:w-full sm:w-[97%] '>
          <div className='flex flex-row justify-evenly pt-10 sm:justify-center sm:flex-wrap sm:pr-20 sm:pb-16'>
          {arrayBanner.map((imgs, index) => (

            <div key={index} className='flex flex-col items-center w-1/3 lg:w-1/4 md:w-full'>
              <img src={imgs.img} alt={imgs.alt} className='' />
              <p className=' text-white text-2xl font-bold text-center 2xl:text-3lg lg:text-xl lg:w-1/2 sm:text-lg '>{imgs.descripcion}</p>
            </div>
             ))}

           </div>
        </div>
      </section>
      <div className='flex'>
        <div className='w-full flex items-center flex-col bg-fnd-image bg-no-repeat bg-cover bg-bottom'>
          <h4 className='text-center py-4 text-2xl font-bold'>¿Problemas con tu heladera? <span className='text-green-500'>Contáctanos</span></h4>
          <ul className='pb-8 text-2xl xs:text-lg xs:ml-6 sm:text-2xl'>
            <li className='text-xl list-disc pb-1 '>Compresor defectuoso</li>
            <li className='text-xl list-disc pb-1 '>Problemas eléctricos</li>
            <li className='text-xl list-disc pb-1 '>Termostato averiado</li>
            <li className='text-xl list-disc pb-1 '>Obstrucción en las bobinas del condensador</li>
            <li className='text-xl list-disc pb-1 '>Fallo en el ventilador del evaporador</li>
            <li className='text-xl list-disc pb-1 '>Sello de la puerta dañado</li>
            <li className='text-xl list-disc pb-1 '>Acumulación de hielo en el evaporador</li>
            <li className='text-xl list-disc pb-1 '>Filtro de agua obstruido</li>
            <li className='text-xl list-disc pb-1 '>Válvula de agua con fugas</li>
            <li className='text-xl list-disc '>Problemas con el sistema de descongelación</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default BrandsSection



