import React from "react";
import imagePortada from "../assets/images/image-frontpage.png";

function Section1() {
  return (
    <div className="w-full mx-auto align-center">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center text-[#CE9CB9]">
        Feliz cumpleaños, mi amor 🎂
      </h1>
      <img
        src={imagePortada}
        className="rounded-full w-60 sm:w-80 text-center mx-auto my-8"
      />
      <p class="text-[22px] sm:text-3xl mx-5 font-normal text-[#DBD9DB]  [&>strong]:text-[#F9F871] [&>strong]:font-bold ">
        Hola, <strong> mi vida.</strong> Primero que todo, te quería desear un
        muy
        <strong> feliz cumpleaños.</strong> En algun momento te prometí escribir
        sobre un recuerdo de nosotros, sabes que soy muy malo para hacer eso,
        pero no quería pasar una fecha tan importante sin hacerte algo especial.
        Espero te guste bastante,
        <strong> te amo.</strong>
      </p>
    </div>
  );
}

export default Section1;
