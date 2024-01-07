/** @format */

import Footer from "./Footer";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="absolute top-[100vh] w-full z-100">
      <div className="px-5 lg:px-32 lg:pt-24  mb-3">
        <h1 className="text-center font-sans text-3xl font-bold">Gallery</h1>
        <p className="text-center font-sans text-lg font-light text-slate-300">
          Gallery Of Smekda 24
        </p>
      </div>
      <div className="mx-auto px-5 py-2 pt-5 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="block w-full flex-wrap sm:flex sm:w-1/2">
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                width={500}
                height={500}
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                width={500}
                height={500}
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                width={500}
                height={500}
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="block w-full flex-wrap sm:flex sm:w-1/2">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                width={500}
                height={500}
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                width={500}
                height={500}
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                width={500}
                height={500}
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
