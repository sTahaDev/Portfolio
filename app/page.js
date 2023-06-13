import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { AiFillGithub,AiFillYoutube } from 'react-icons/ai';

export default function Home() {
  
  return (
    <div className=" flex flex-col items-center justify-center bg-slate-200">
      <Navbar/>
      <div className=" flex flex-col items-center justify-center text-center p-36 max-lg:p-5 max-lg:mt-[100px] max-lg:mb-[100px]">
        <p className=" text-4xl max-lg:text-3xl">👋Hi, I am Taha</p>
        <p className=" text-6xl max-lg:text-5xl">I have been trying to be a good developer for +3 years.</p>
        <p className=" m-4">a Full-Stack Developer And An Open-Source Project Contributor</p>
        <div className=" flex flex-row gap-6">
          <Link href={"https://github.com/sTahaDev"} className=" border-2 border-black rounded-xl w-32 h-12 flex flex-row gap-1 items-center justify-center transition-all duration-500 hover:rounded-3xl"> <AiFillGithub size={24}/> Github</Link>
          <Link href={"https://www.youtube.com/channel/UC59a2KHqlKRuIrO1Yv0xeBg"} className=" border-2 border-black rounded-xl w-32 h-12 flex flex-row gap-1 items-center justify-center transition-all duration-500 hover:rounded-3xl"> <AiFillYoutube size={24}/> Youtube</Link>
        </div>
      </div>
      <div className=" flex flex-col  text-center w-full p-4  pt-3 m-4 max-lg:p-0 max-lg:text-center">
        <p className="text-4xl underline ">Projects</p>
        <div className="flex flex-row flex-wrap justify-center gap-3 max-lg:items-center max-lg:justify-center">
        <Card title="AlfaChatApp" desc="Chat App maded with socket and express" language={"Javascript"} url={"https://github.com/sTahaDev/AlfaChatApp"} />
        <Card title="Sesli-Asistan" desc="Python ile yapılmış sesli bir yardımcı asistan." language={"Python"} url={"https://github.com/sTahaDev/Sesli-Asistan"} />
        <Card title="Para-Harcama-uygulamasi" desc="React ile oluşturulmuş para harcama uygulaması." language={"Javascript"} url={"https://github.com/sTahaDev/Para-Harcama-uygulamasi"} />
        <Card title="E-Ticaret-Sitesi" desc="Html,Css ve JS ile yapılmış basit bir Ticaret Web Sitesi." language={"Javascript"} url={"https://github.com/sTahaDev/E-Ticaret-Sitesi"} />
        </div>
      </div>
    </div>
  )
}
