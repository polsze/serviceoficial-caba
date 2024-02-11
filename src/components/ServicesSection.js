import React from 'react'
import { Icon } from '@iconify/react';

const ServicesSection = () => {

  const serviceCard = [
    {
      titulo: 'Nuestro trabajo tiene garantía',
      descripcion: 'Nuestro trabajo 100% garantizado es sinónimo de confianza. Decenas de clientes requieren nuestros servicios a diario.',
      icono: 'emojione-v1:left-check-mark'
    },
    {
      titulo: 'Usamos Repuestos Originales',
      descripcion: 'Nuestros técnicos utilizan repuestos originales para garantizar el correcto funcionamiento de su heladera.',
      icono: 'icon-park:refrigerator'
    },
    {
      titulo: 'Servicio Residencial y Comercial',
      descripcion: 'Cobertura inmediata, solicite nuestros servicios, zona de cobertura Capital Federal.',
      icono: 'flat-color-icons:home',
    },
    {
      titulo: 'Técnicos Capacitados',
      descripcion: 'Técnicos en continua capacitación para brindar soluciones efectivas y estar a la altura de las últimas exigencias del mercado.',
      icono: 'noto:construction-worker-medium-light-skin-tone'
    }
  ]

  return (
    <>
      <div className='w-full h-auto py-4'>
        <div className='flex flex-row items-center justify-evenly 2xl:justify-items-center xl:flex lg:flex-wrap sm:flex sm:flex-col sm:flex-wrap'>
          <div className='w-full h-auto py-4'>
            <div className='flex flex-row items-center justify-evenly 2xl:grid 2xl:grid-cols-2 2xl:justify-items-center lg:flex-wrap sm:flex sm:flex-col sm:flex-wrap'>
              {serviceCard.map((card, index) => (
                <div key={index} className="max-w-sm rounded overflow-hidden flex mt-4 items-center flex-col sm:flex-wrap">
                  <Icon icon={card.icono} height={80} />
                  <h2 className="font-bold text-xl mb-2 text-center 2xl:text-xl sm:text-xl">{card.titulo}</h2>
                  <p className="text-gray-700 text-lg  2xl:text-xl sm:text-md sm:w-[80%]">
                    {card.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesSection
