"use client"
import React from 'react'
import Mapa from '../images/capital-federal-mapa.webp'
import { Icon } from '@iconify/react';

const ZonesSection = () => {
  return (
    <>
      <div className='py-8 flex flex-row items-center justify-center sm:flex-wrap'>
        <div className=''>
          <img src={Mapa} alt="Reparacion de heladeras a domicilio en toda Capital Federal" />
        </div>
        <div className='w-[60%] sm:w-[100%]'>
          <div className='flex flex-row'>
            <h4 className='text-2xl font-bold pb-4 sm:text-left sm:px-4 sm:pt-4'>SERVICIO EN TODA LA CIUDAD DE BUENOS AIRES</h4>
            <div className='pl-4 lg:pr-6 lg:pt-12 sm:pl-0 sm:pr-4 '>
              <Icon icon="icon-park:car" width={56} height={56}/>
            </div>
          </div>
          <p className='text-lg sm:text-lg sm:px-2'>Agronomía - Almagro - Balvanera - Barrio Norte - Belgrano -
            Caballito - Centro - Coghlan - Colegiales - Congreso - Constitución - Flores - Floresta - Liniers -
            Mataderos - Nuñez - Palermo - Parque Centenario - Parque Chacabuco - Paternal -  Puerto Madero -
            Recoleta - Saavedra - San Telmo - Tribunales - Versailles - Villa Crespo - Villa Devoto - Villa Luro - Villa Pueyrredón - Villa Urquiza - Villa Del Parque.</p>
        </div>
      </div>
    </>
  )
}

export default ZonesSection

