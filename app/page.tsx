import ThreeScene from "@/components/component/home";
import NavMenu from "@/components/component/navbar";
import Image from "next/image";
import MainCard from "@/components/component/maincard";
import { Main } from "next/document";

const HomePage = () => {
  return (
    <main className="grid grid-cols-3 min-h-screen">
      <div className=" p-20 col-span-3 flex justify-end items-center">
        <MainCard/>
      </div>
    </main>
  );
};

export default HomePage;
