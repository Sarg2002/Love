import React from "react";
import imagePortada from "../assets/images/image-frontpage.jpeg";

function Section1() {
  return (
    <div className="w-full mx-auto align-center">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center text-[#FFA966]">
        Feliz Aniversario 🧡
      </h1>
      <img
        src={imagePortada}
        className="rounded-full w-60 sm:w-80 text-center mx-auto my-8"
      />
      <p class="text-[22px] sm:text-3xl mx-5 font-normal text-[#DBD9DB]  [&>strong]:text-[#F9F871] [&>strong]:font-bold ">
        Amor de mi vida. Ya son cuatro años que te tengo a mi lado, y gracias a Dios agradezco el haber coincidido contigo.
        A traves de este mensaje quiero que recordemos juntos todo lo vivido a tu lado, Te amo demasiado. <strong> ¡Feliz Aniversario! </strong> 
      </p>
    </div>
  );
}

export default Section1;
