import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      width={38}
      height={38}
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  );
};

export default Logo;
