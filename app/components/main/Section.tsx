/** @format */

import Image from "next/image";

export default function Section() {
  return (
    <div className="bg-slate-950">
      <Image
        className="absolute w-full h-screen object-cover z-10"
        src="/DSC.jpg"
        alt="Main Image"
        width={1000}
        height={1000}
      />

      <div className="absolute top-0 z-50 w-full h-screen md:w-fit bg-gradient-to-t from-slate-950 from-10% flex items-center justify-center">
        <div className="w-[90%] xl:w-[60%] sm:w-[80%]">
          <h1 className="text-center font-sans text-5xl sm:text-7xl xl:text-9xl font-bold mb-5">
            SMEKDA 24
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            voluptatum itaque est, similique dolores aliquam. Porro voluptatum,
            assumenda eligendi unde reprehenderit corrupti consequatur. Nihil
            pariatur natus minus voluptatem facilis officiis!
          </p>
        </div>
      </div>

      <div className="absolute top-0 right-0 z-50 w-full h-[20rem]">
        <h1 className="-rotate-90 w-full text-center text-5xl sm:text-6xl xl:text-7xl font-black -translate-x-[47%] translate-y-[10rem] bg-transparent opacity-15">
          SMEKDA 24
        </h1>
        <h1 className="rotate-90 text-center text-5xl sm:text-6xl xl:text-7xl font-black translate-x-[47%] translate-y-[28rem] bg-transparent opacity-20">
          SMEKDA 24
        </h1>
      </div>
    </div>
  );
}
