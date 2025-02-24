import Image from "next/image";
import React from "react";

const About = () => {
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
            <p>1996 Aksaray doğumlu Fatma Zehra Çetin evli ve bir kız çocuk annesidir.</p>
            <p>
              2014 yılında Cumhuriyet Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümünü
              kazanarak üniversite hayatına başlamıştır. 2018 yılında 3.18/4 not ortalamasıyla mezun
              olmuştur. Üniversite öğrenimi sırasında Zeka Oyunları, Çocuk Objektif
              Testleri,Psikanalitik Psikoterapi eğitimleri almıştır. Çeşitli platformlarda online
              danışmanlık yapmıştır.
            </p>
            <p>
              Yazılıma olan ilgisiyle birlikte teknoloji çağına ayak uydurmak amacıyla 2022 yılında
              Anadolu Üniversitesi Bilgisayar Programcılığı bölümüne kaydolmuştur ve hayatında başka
              bir dönem açılmıştır. Udemig Akademi'den "Frontend Developer" ve "Mobile Developer"
              eğitimleri almıştır. Uluslararası Akreditasyon Merkezinden 400 Saatlik Yazılım
              Uzmanlığı Eğitimi almıştır.
            </p>
            <p>
              HTML, CSS, JavaScript, React, React Native, Next.js teknolojileriyle çalışmakta olup
              bu alanda gün geçtikçe kendini geliştirmektedir.
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
