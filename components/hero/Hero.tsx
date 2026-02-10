import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["900"],
});

export default function Hero() {
  return (
    <section className="bg-[#FFF6E5]">
      <div className="mx-5 px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ================= MAIN HERO ================= */}
          <div className="relative lg:col-span-2 rounded-[48px] overflow-hidden bg-gradient-to-br from-[#2A140B] to-[#120604] py-6">

            {/* CENTERED STACK */}
            <div className="relative h-full flex items-center justify-center">

              <div className="relative flex items-center justify-center w-full">

                {/* 1️⃣ SOLID BASE TEXT */}
                <h1
                  className={`${poppins.className} absolute z-10 text-[92px] leading-[0.95] tracking-wide text-[#F5E6C8] text-center`}
                >
                  PURE BLISS
                  <br />
                  IN EVERY BITE
                </h1>

                {/* 2️⃣ CAKE IMAGE */}
                <div className="absolute z-20 w-[380px]">
                  <Image
                    src="/heroimage1.png"
                    alt="Chocolate Cake"
                    width={610}
                    height={610}
                    priority
                    className="object-contain"
                  />
                </div>

                {/* 3️⃣ OUTLINED TRANSPARENT TEXT */}
                <h1
                  className={`${poppins.className} absolute z-30 text-[92px] leading-[0.95] tracking-wide text-transparent text-center pointer-events-none`}
                  style={{
                    WebkitTextStroke: "2px #F5E6C8",
                  }}
                >
                  PURE BLISS
                  <br />
                  IN EVERY BITE
                </h1>

              </div>
            </div>
          </div>

          {/* ================= FEATURED CARD ================= */}
          <div className="rounded-[48px] bg-gradient-to-br from-[#2A1A14] to-[#1A0E09] px-8 py-10 flex flex-col items-center text-center">
            <p className="text-xl font-bold tracking-widest text-[#F5E6C8]">
              FEATURED
              <br />
              CATEGORIES
            </p>

            <div className="relative w-80 h-80 mt-8">
              <Image
                src="/heroimage.png"
                alt="Cake"
                width={610}
                height={610}
                className="object-contain "
              />
            </div>

            <p className="mt-4 text-lg font-semibold text-white">Cake</p>

            <button className="mt-6 rounded-full bg-[#FFA726] px-6 py-2 text-sm font-semibold text-black">
              See more
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
