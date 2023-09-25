"use client"
import React from "react";
import useForm from "./useForm";
import Repair from '../images/reparando-heladera.webp'
import Call from '../images/icono-llamada.webp'
import { motion } from 'framer-motion'
import { BannerTwo } from "./BannerSm";


const ContactSection = () => {
  const initialData = {
    nombre: "",
    correo: "",
    asunto: "",
    telefono: "",
    mensaje: "",
  };

  const onValidate = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.nombre.trim()) {
      errors.nombre = 'El campo "Nombre" no debe estar vacío.';
    } else if (!regexName.test(form.nombre)) {
      errors.nombre = 'El campo "Nombre" solo acepta letras y espacios.';
    }

    if (!form.correo.trim()) {
      errors.correo = 'El campo "Correo" no debe estar vacío.';
    } else if (!regexEmail.test(form.correo)) {
      errors.correo = 'El campo "Correo" contiene un formato no.';
    }

    if (!form.asunto.trim()) {
      errors.asunto = 'El campo "Asunto" no debe estar vacío.';
    } else if (!regexName.test(form.asunto)) {
      errors.asunto = 'El campo "Asunto" solo acepta letras y espacios.';
    }

    if (!form.telefono.trim()) {
      errors.telefono = 'El campo "Teléfono" no debe estar vacío.';
    } else if (!regexName.test(form.telefono)) {
      errors.telefono = 'El campo "Telefono" es obligatorio';
    }

    if (!form.mensaje.trim()) {
      errors.mensaje = 'El campo "Mensaje" no debe estar vacío.';
    } else if (!regexComments.test(form.mensaje)) {
      errors.mensaje = 'El campo "Mensaje" acepta solo 255 caracteres.';
    }

    return errors;
  };

  const { form, errors, loading, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate
  );

  const phoneNumber = "1156367024"; // Número de teléfono para realizar la llamada

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <BannerTwo />
      <div className="flex flex-row items-center justify-center flex-wrap py-24 sm:py-2">
        <div className="pr-12 sm:pr-0 lg:pr-0 xl:pr-0 xl:pb-2 2xl:pr-0">
          <div>
            <img src={Repair} alt="Reparación de heladeras" className="shadow brightness-50 rounded" />
          </div>
        </div>

        <div className="rounded bg-gradient-to-l from-slate-500 via-slate-400 to-slate-300 flex items-center justify-center flex-col shadow-lg w-[30%] 
          xl:w-[90%] 2xl:w-[100%] lg:w-[100%] sm:w-[100%]">
          <h4 className="pt-4 text-4xl font-bold text-center text-white sm:text-3xl sm:pb-4">ENVÍANOS TU CONSULTA</h4>
          <p className="pt-4 px-24 w-[70%] text-white font-bold flex flex-col items-center sm:w-full sm:px-4 sm:pb-4 sm:py-0">
            CONTACTANOS POR CORREO ELECTRÓNICO O LLAMANDO AL:
          </p>
          <div className="flex flex-row items-center pb-4">
            <img src={Call} alt="Ícono telefónico" className="mr-4" />
            <motion.button className="text-white bg-gradient-to-b from-emerald-400 to-emerald-800  font-bold text-2xl px-3 py-2 rounded-xl sm:text-2xl sm:flex sm:justify-end"
              whileTap={{ scale: 0.9 }} onClick={handlePhoneClick}>
              1156367024
            </motion.button>
          </div>

          <form className="" onSubmit={handleSubmit}>
            <label className="form-label font-bold text-xl sm:pl-2">Nombre</label>
            <input
              type="text"
              className="form-control rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Ingrese su nombre aquí"
            />
            {errors.nombre && (
              <div className="alert alert-danger p-2 rounded-xl mt-1 sm:w-[95%] sm:mx-auto">{errors.nombre}</div>
            )}

            <label className="form-label pt-2 font-bold text-xl sm:pl-2">Correo electrónico</label>
            <input
              type="email"
              className="form-control rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200 "
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="Ingrese su correo electrónico aquí"
            />
            {errors.correo && (
              <div className="alert alert-danger rounded-xl mt-1 p-2 sm:w-[95%] sm:mx-auto">{errors.correo}</div>
            )}

            <label className="form-label pt-2 font-bold text-xl sm:pl-2">Asunto</label>
            <input
              type="text"
              className="form-control rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200"
              name="asunto"
              value={form.asunto}
              onChange={handleChange}
              placeholder="Ingrese su asunto aquí"
            />
            {errors.asunto && (
              <div className="alert alert-danger rounded-xl mt-1 p-2 sm:w-[95%] sm:mx-auto">{errors.asunto}</div>
            )}

            <label className="form-label pt-2 font-bold text-xl sm:pl-2">Teléfono</label>
            <input
              type="number"
              className="form-control rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="Número de celular"
            />
            {errors.telefono && (
              <div className="alert alert-danger rounded-xl mt-1 p-2 sm:w-[95%] sm:mx-auto">{errors.telefono}</div>
            )}

            <label className="form-label pt-2 font-bold text-xl sm:pl-2">Mensaje</label>
            <textarea
              className="form-control rounded-xl sm:w-[95%] sm:mx-auto hover:bg-sky-200"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              cols="40"
              rows="6"
              placeholder="Ingrese mensaje aquí"
            />
            {errors.mensaje && (
              <div className="alert alert-danger p-2 mt-1 rounded-xl sm:w-[95%] sm:mx-auto">{errors.mensaje}</div>
            )}

            <div className="flex items-center justify-center py-4">
              <motion.button
                className="text-white py-2 rounded-xl font-bold text-xl bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500 
              w-[100%] sm:w-[95%]"
                type="submit"
                disabled={loading}
                whileTap={{ scale: 0.9 }}
              >
                {loading ? "Enviando..." : "Enviar"}
              </motion.button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default ContactSection;