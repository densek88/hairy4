import Image from "next/image";
import {Coiny} from "next/font/google";

const coinySans = Coiny({
  variable: "--font-coiny",
  subsets: ["latin"],
  weight: "400"
});


export default function Home() {
  return (
    
    <div
      className={`${coinySans.variable} grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen w-full pb-20   font-[family-name:var(--font-coiny)]`}
    >
      <main className="">
        <div className="flex flex-col gap-8 row-start-2 items-center pt-[7rem] pb-[7rem]">
        <Image
          className="transition-transform duration-200 hover:scale-110"
          src="/img/gif.gif"
          alt="Next.js logo"
          width={450}
          height={38}
          priority
        />
        </div>
        <div className="flex gap-12 justify-center pb-10">
          <a href="https://x.com/TheHairyCoin" target="_blank">
          <Image
            className="w-12 h-12 transition-transform duration-200 hover:scale-110"
            src="/img/twitter.png"
            alt="Logo 1"
            width={64}
            height={64}
          />
          </a>
          <a href="#">
          <Image
            className="w-12 h-12 transition-transform duration-200 hover:scale-110"
            src="/img/dexscreener.png"
            alt="Logo 3"
            width={64}
            height={64}
          />
           </a>
        </div>
        <div className=" text-center justify-items-center sm:text-left text-white text-8xl ">
          <p className="mb-2 transition-transform duration-200 hover:scale-110">
          A hairy creature named Hairy 
          </p>
          
        </div>
        <div class=" dark:bg-gray-800  py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                
                  <a 
                      class="group relative flex h-48 items-end overflow-hidden rounded-3xl shadow-lg md:h-80">
                      <img src="/img/hairy5.png" loading="lazy" alt="hairy" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                      <div
                          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                      </div>
                  </a>
                
                  <a 
                      class="group relative flex h-48 items-end overflow-hidden rounded-3xl  shadow-lg md:col-span-2 md:h-80">
                      <img src="/img/hairy1.png" loading="lazy" alt="hairy" class=" inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                      <div
                          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                      </div>
                  </a>
                
                  <a 
                      class="group relative flex h-48 items-end overflow-hidden rounded-3xl  shadow-lg md:col-span-2 md:h-80">
                      <img src="/img/hairy3.png" loading="lazy" alt="hairy" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                      <div
                          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                      </div>
                  </a>
                
                  <a 
                      class="group relative flex h-48 items-end overflow-hidden rounded-3xl bg-gray-100 shadow-lg md:h-80">
                      <img src="/img/hairy6.png" loading="lazy" alt="hairy" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                      <div
                          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                      </div>
                  </a>
                  <a 
                      class="group relative flex h-48 items-end overflow-hidden rounded-3xl shadow-lg md:h-80">
                      <img src="/img/hairy2.png" loading="lazy" alt="hairy" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                      <div
                          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                      </div>
                  </a>
                
                  <a 
                      class="group relative flex h-48 items-end overflow-hidden rounded-3xl  shadow-lg md:col-span-2 md:h-80">
                      <img src="/img/hairy4.png" loading="lazy" alt="hairy" class=" inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                      <div
                          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                      </div>
                  </a>
                
              </div>
          </div>
      </div>
      <div class="flex flex-col items-center justify-center w-full  text-center text-white">
        <p class="text-[25vw] font-bold uppercase leading-none transition-transform duration-200 hover:scale-110">HAIRY</p>
        <p class="text-[2.5vw] transition-transform duration-200 hover:scale-110" >CA: .............................................................................................pump</p>
      </div>
      <div class="dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a 
              class="group relative flex h-[15rem] items-end overflow-hidden rounded-3xl shadow-lg md:col-span-2 md:h-[40rem]">
              
              
              <img src="/img/makingfire.gif" loading="lazy" alt="hairy"
                class="absolute inset-0 w-full h-full object-cover " />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
              
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center w-full  text-center text-white pb-20 pt-20">
        <p class="text-[2.5vw] transition-transform duration-200 hover:scale-110" >2025 © ALL RIGHTS RESERVED - HAIRY</p>
      </div>
     
      </main>
     
      
    </div>
  );
}
