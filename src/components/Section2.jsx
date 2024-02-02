import React from "react";
import OurHistory from "../assets/data/OurHistory";

function Section2() {
  return (
    <div>
      <h2 class="text-center mt-20 text-4xl sm:text-5xl font-bold text-[#CE9CB9]">
        Mis recuerdos memorables 🤍
      </h2>
      <ol class="relative ml-2 mt-16">
        {OurHistory.map((history) => (
          <li>
            <div class="relative mx-12 pb-6 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15  md:grid-cols-6 md:gap-10 md:space-x-4]">
              <div class="relative pb-12 md:col-span-3 ">
                <div class="sticky top-0 ">
                  <span class="text-[#b3e59f] -left-[42px] sm:-left-[48px]  absolute rounded-full text-5xl mt-[-10px]">
                    •
                  </span>
                  <time class=" mt-2 block text-[17px] sm:text-[20px] text-[white]">
                    {history.data}
                  </time>
                  <h3 class="text-2xl sm:text-3xl font-bold text-[#F18F7E] ">
                    {history.title}
                  </h3>
                  <img
                    src={history.img}
                    alt={history.id}
                    className="mt-1 rounded-2xl w-70 sm:w-100 mb-[-30px] sm:mb-0   border-2 border-white/15"
                  />
                </div>
              </div>
              <div class="text-xl sm:text-2xl flex flex-col gap-2 pb-4 mt-[-10px] text-[#DBD9DB] md:col-span-3 sm:justify-center ">
                {history.desc}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Section2;
