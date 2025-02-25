import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-white">
      {/* Arka Plan */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/woman pc.avif')" }}
      ></div>

      <div className="h-52 w-52 rounded-full mx-auto relative border-4  border-[#500073]  overflow-hidden">
        <Image
          className="rounded-full object-cover p-2"
          src="/ftz.jpeg"
          alt="Profile Picture"
          fill
        />
      </div>

      {/* İçerik */}
      <div className="relative z-10 text-center my-5">
        <h1 className="text-5xl font-bold text-[#500073]">Fatma Zehra Çetin</h1>
        <p className="mt-4 text-xl text-[#500073]">Psikolojik Danışman & Yazılım Uzmanı</p>
      </div>
      <div className="w-28 h-12 relative bg-[#DF6D2D] rounded-md text-center p-2">
        <a
          href="/cv.pdf"
          download
          className="text-white font-semibold block h-full flex items-center justify-center"
        >
          Cv İndir
        </a>
      </div>
    </main>
  );
}
