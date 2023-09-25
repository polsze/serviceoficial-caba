import React from 'react'
import Grt from '../images/garantia.webp'
import Rpt from '../images/repuesto.webp'
import Casa from '../images/casa-local.webp'
import Worker from '../images/trabajador.webp'



const ServicesSection = () => {
  return (
    <>
      <div className='w-full h-auto py-4'>
        <div className='flex flex-row items-center justify-evenly 2xl:grid 2xl:grid-cols-2 2xl:justify-items-center lg:flex-wrap sm:flex sm:flex-col sm:flex-wrap'>
          <div className="max-w-sm rounded overflow-hidden flex items-center flex-col sm:flex-wrap">
            <img className="" src={Grt} alt="Trabajo con Garantía" />
            <h2 className="font-bold text-xl mb-2 text-center">Nuestro Trabajo Tiene Garantía</h2>
            <p className="text-gray-700 text-lg sm:w-[80%]">
              Nuestro trabajo 100% garantizado es sinónimo de confianza. Decenas de clientes requieren nuestros servicios a diario.
            </p>
          </div>
          <div className='h-96 border border-r-2 border-solid 2xl:hidden lg:hidden md:hidden sm:hidden'></div>
          <div className="max-w-sm rounded overflow-hidden flex items-center flex-col sm:flex-wrap">
            <img className="" src={Rpt} alt="Repuestos Originales de fábrica" />
            <h2 className="font-bold text-xl mb-2 text-center">Usamos Repuestos Originales</h2>
            <p className="text-gray-700 text-lg sm:w-[80%]">
              Nuestros técnicos utilizan repuestos originales para garantizar el correcto funcionamiento de su heladera.
            </p>
          </div>
          <div className='h-96 border border-r-2 border-solid 2xl:hidden lg:hidden md:hidden sm:hidden'></div>
          <div className="max-w-sm rounded overflow-hidden flex items-center flex-col sm:flex-wrap">
            <img className="" src={Casa} alt="Servicio a domicilio en Capital Federal" />
            <h2 className="font-bold text-xl mb-2 text-center">Servicio Residencial y Comercial</h2>
            <p className="text-gray-700 text-lg sm:w-[80%]">
            Cobertura inmediata, solicite nuestros servicios, zona de cobertura Capital Federal.
            </p>
          </div>
          <div className='h-96 border border-r-2 border-solid 2xl:hidden lg:hidden md:hidden sm:hidden'></div>
          <div className="max-w-sm rounded overflow-hidden flex items-center flex-col sm:flex-wrap">
            <img className="" src={Worker} alt="Técnicos capacitados" />
            <h2 className="font-bold text-xl mb-2 text-center">Técnicos Capacitados</h2>
            <p className="text-gray-700 text-lg sm:w-[80%]">
              Técnicos en continua capacitación para brindar soluciones efectivas y estar a la altura de las últimas exigencias del mercado.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesSection