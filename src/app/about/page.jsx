import Image from "next/image";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

const About = () => {
  const technologies = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: IoLogoJavascript },
    { name: "React", icon: FaReact },
    { name: "React Native", icon: FaReact },
    { name: "TailwindCss", icon: RiTailwindCssFill },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "Redux", icon: SiRedux },
  ];
  return (
    <div className="p-5 min-h-screen">
      <div>
        <h1 className="text-[#DF6D2D] text-center font-bold py-10 text-2xl md:text-3xl">
          BİYOGRAFİ
        </h1>
      </div>

      {/* Profil Kısmı */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6">
        <Image
          className="rounded-full object-cover"
          src="/ftz.jpeg"
          width={200}
          height={200}
          alt="Profile Picture"
        />
        <div className="text-black w-full md:w-2/3 p-5">
          <h4 className="text-start text-black text-lg md:text-xl font-semibold">
            Fatma Zehra ÇETİN
          </h4>
          <h5 className="text-[#DF6D2D] my-1 text-base md:text-lg">Ankara, TR</h5>
          <div className="text-black text-sm md:text-base leading-relaxed">
            <p>
              1996 Aksaray doğumlu, evli ve bir kız çocuk annesiyim. 2014 yılında Cumhuriyet
              Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümünü kazanarak üniversite
              hayatıma başladım. 2018 yılında 3.18/4 not ortalamasıyla mezun oldum. Üniversite
              eğitimim sırasında Zeka Oyunları, Çocuk Objektif Testleri ve Psikanalitik Psikoterapi
              gibi alanlarda eğitimler aldım. Mezuniyet sonrası çeşitli platformlarda online
              danışmanlık hizmeti vererek hem tecrübe kazandım hem de insanlara destek olmanın
              mutluluğunu yaşadım.
            </p>
            <p>
              Teknolojiye ve yazılıma olan ilgim, beni 2022 yılında Anadolu Üniversitesi Bilgisayar
              Programcılığı bölümüne kaydolmaya yöneltti. Bu kararla birlikte hayatımda yeni bir
              sayfa açıldı. Udemig Akademi'den Frontend Developer ve Mobile Developer eğitimleri
              aldım. Ayrıca Uluslararası Akreditasyon Merkezi tarafından verilen 400 saatlik Yazılım
              Uzmanlığı Eğitimini tamamladım.
            </p>
            <p>
              Şu anda aktif olarak HTML, CSS, JavaScript, React, React Native ve Next.js gibi
              teknolojilerle çalışıyorum. Yazılım alanında kendimi sürekli geliştiriyor ve bu alanda
              profesyonel olarak çalışıyorum. Hem psikolojik danışmanlık hem de yazılım alanındaki
              bilgi ve deneyimlerimi birleştirerek, insanlara daha iyi hizmet sunmayı hedefliyorum.
            </p>
          </div>
        </div>
      </div>

      {/* Sertifikalar Bölümü */}
      <div className="mt-10">
        <div>
          <h1 className="text-[#DF6D2D] my-5 text-lg md:text-xl font-semibold">
            Psikolojik Danışman
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image
              className="object-cover rounded-lg"
              src="/diploma.jpeg"
              width={300}
              height={200}
              alt="Diploma"
            />
            <Image
              className="object-cover rounded-lg"
              src="/cocukobj.jpeg"
              width={300}
              height={200}
              alt="Çocuk Objektif Testleri"
            />
            <Image
              className="object-cover rounded-lg"
              src="/zekaoyunları.jpeg"
              width={300}
              height={200}
              alt="Zeka Oyunları"
            />
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-[#DF6D2D] my-5 text-lg md:text-xl font-semibold">
            Yazılım Uzmanlığı
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image
              className="object-cover rounded-lg"
              src="/uluslararası_sertifika.jpg"
              width={300}
              height={200}
              alt="Uluslararası Sertifika"
            />
            <Image
              className="object-cover rounded-lg"
              src="/Udemig Frontend sertifika.jpg"
              width={300}
              height={200}
              alt="Frontend Sertifika"
            />
            <Image
              className="object-cover rounded-lg"
              src="/reactNativesertifika.jpg"
              width={300}
              height={200}
              alt="Frontend Sertifika"
            />
          </div>
        </div>
      </div>

      {/*Kullanılan Teknolojiler*/}
      <div>
        <h1 className="text-[#DF6D2D] my-5 text-lg md:text-xl font-semibold">
          Kullandığı Teknolojiler
        </h1>
        <div className="flex flex-wrap gap-4 p-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon; // İkon bileşenini değişkene atayın
            return (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-[#500073]"
              >
                <Icon className="text-4xl text-[#500073]" /> {/* İkonu render et */}
                <span className="mt-2 text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deneyim */}
      <div className="container mx-auto px-4">
        <h1 className="text-[#DF6D2D] text-center font-bold py-10 text-2xl md:text-3xl">Deneyim</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-[#E5D9F2] rounded-lg shadow-md">
            <h2 className="font-bold text-lg">Frontend Developer</h2>
            <h3 className="text-sm my-1">Arebuleu (Uzaktan)</h3>
            <h3 className="text-sm">Oca 2022 - Ara 2023</h3>
            <ul className="my-3 gap-3">
              <li>Html, Css ve Javascript kullanarak ön yüz oluşturuldu.</li>
              <li>
                React.js kullanılarak dinamik ve interaktif kullanıcı arayüzleri oluşturuldu,
                bileşen tabanlı yapı ile uygulamanın bakım ve genişletilebilirliği artırıldı.
              </li>
              <li>
                Responsive tasarım prensiplerine uygun olarak geliştirildi. Ayrıca, backend
                entegrasyonu için Restful API'ler ile çalışma deneyimi kazanıldı ve veri yönetimi
                için JSON formatı kullanıldı.
              </li>
              <li>Bootsrap , SCSS gibi kütüphaneler kullanıldı.</li>
            </ul>
          </div>

          <div className="p-5 bg-[#E5D9F2] rounded-lg shadow-md">
            <h2 className="font-bold text-lg">React Native Developer</h2>
            <h3 className="text-sm my-1">Didiyos (Uzaktan)</h3>
            <h3 className="text-sm">Oca 2024 - Halen</h3>
            <ul className="my-3 gap-3">
              <li>
                React Native ile tüm cihazlara uyumlu kullanıcı dostu mobil uygulamalar geliştirildi
              </li>
              <li>Firebase ile kimlik doğrulama, entegre edildi</li>
              <li>Ekip çalışması ve bireysel sorumluluklarla projeler başarıyla tamamlandı</li>
              <li>Git ve GitHub kullanılarak versiyon kontrolü yapıldı</li>
              <li>Ekip çalışması ve bireysel sorumluluklarla projeler başarıyla tamamlandı</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
