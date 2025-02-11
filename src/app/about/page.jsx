import Image from "next/image";
import React from "react";
import { VscStarEmpty } from "react-icons/vsc";

const About = () => {
  return (
    <>
      <div className=" p-5 min-h-screen ">
        <h1 className="text-[#DF6D2D] text-center font-bold py-10 text-3xl">BİYOGRAFİ</h1>

        <div className=" flex items-center justify-center">
          <Image
            className="rounded-full object-cover"
            src="/ftz.jpeg"
            width={200}
            height={100}
            alt="Profile Picture"
          />
          <div className="text-black w-[90%] p-5">
            <h4 className=" text-start text-black ">Fatma Zehra ÇETİN</h4>
            <h5 className="text-[#F14A00] my-3">Ankara,TR</h5>
            <div className="text-black ">
              <div className="flex flex-row gap-2 my-5">
                <VscStarEmpty size={24} />
                <p>1996 Aksaray doğumlu Fatma Zehra Çetin evli ve bir kız çocuk annesidir.</p>
              </div>
              <div className="flex flex-row gap-2 my-5">
                <VscStarEmpty size={24} />
                <p>
                  2014 yılında Cumhuriyet Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümünü
                  kazanarak üniverisite hayatına başlamıştır. 2018 yılında 3.18/4 not ortalamasıyla
                  mezun olmuştur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
