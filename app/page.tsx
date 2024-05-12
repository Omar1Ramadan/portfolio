import ThreeScene from "@/components/component/home";
import NavMenu from "@/components/component/navbar";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="w-full min-h-screen relative">
      <div className="relative z-10">
        <NavMenu />
      </div>
      <Image
        src = "/crazyman.png"
        width={100}
        height = {100}
        alt = "nae"

      />
    </main>
  );
};

export default HomePage;
