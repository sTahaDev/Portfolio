import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { AiFillGithub,AiFillYoutube } from 'react-icons/ai';

export default function Home() {
  
  return (
    <div className=" flex flex-col items-center justify-center bg-slate-200">
      <Navbar/>
      <div className=" flex flex-col items-center justify-center text-center p-36">
        <p className=" text-4xl ">👋Hi, I am Taha</p>
        <p className=" text-6xl ">I have been trying to be a good developer for +3 years.</p>
        <div className=" m-4 flex flex-row gap-1 font-light">a <p className=" font-bold"> Full-Stack </p> Developer and an <p className=" font-bold"> Open-Source </p> Project Contributor.</div>
        <div className=" flex flex-row gap-6">
          <Link href={"https://github.com/sTahaDev"} className=" border-2 border-black rounded-xl w-32 h-12 flex flex-row gap-1 items-center justify-center transition-all duration-500 hover:rounded-3xl"> <AiFillGithub size={24}/> Github</Link>
          <Link href={"https://www.youtube.com/channel/UC59a2KHqlKRuIrO1Yv0xeBg"} className=" border-2 border-black rounded-xl w-32 h-12 flex flex-row gap-1 items-center justify-center transition-all duration-500 hover:rounded-3xl"> <AiFillYoutube size={24}/> Youtube</Link>
        </div>
      </div>
      <div className=" flex flex-col  text-left w-full pl-36 pr-36 pt-3 m-4 ">
        <p className="text-4xl underline">Projects</p>
        <div className=" flex flex-row gap-[30px]">
        <Card title="AlfaChatApp" desc="Chat App maded with socket and express" language={"Javascript"} url={"https://github.com/sTahaDev/AlfaChatApp"} />
        <Card title="Sesli-Asistan" desc="Python ile yapılmış sesli bir yardımcı asistan." language={"Python"} url={"https://github.com/sTahaDev/Sesli-Asistan"} />
        <Card title="Para-Harcama-uygulamasi" desc="React ile oluşturulmuş para harcama uygulaması." language={"Javascript"} url={"https://github.com/sTahaDev/Para-Harcama-uygulamasi"} />
        </div>
      </div>
    </div>
  )
}
