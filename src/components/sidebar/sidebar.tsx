import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/sidebar/logo";

const Sidebar = () => {
  return (
    <aside className="bg-sidebar text-sidebar-foreground max-w-[120px] w-full h-full z-50 pt-8">
      <div className="flex flex-col items-center h-full">
        <Logo />
        <div className="flex flex-col items-center gap-12 h-full mt-[108px]">
          <Link
            href="/home"
            className="flex flex-col items-center hover:scale-105"
          >
            <Image
              src="/icons/home-icon.png"
              alt="logo"
              width={24}
              height={24}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <p className="text-accent">Home</p>
          </Link>
          <Link
            href="/map"
            className="flex flex-col items-center hover:scale-105"
          >
            <Image
              src="/icons/map-icon.png"
              alt="logo"
              width={24}
              height={24}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <p>Map</p>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
