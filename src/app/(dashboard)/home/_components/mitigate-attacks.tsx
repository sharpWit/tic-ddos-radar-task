import Image from "next/image";

const MitigateAttacks = () => {
  return (
    <div className="border w-5/12 h-full bg-sidebar rounded-l-xs py-14 px-8">
      <div className="flex flex-col items-center gap-5">
        <Image
          src="/icons/line-chart.svg"
          alt="line chart"
          priority
          width={68}
          height={68}
        />
        <p className="text-accent text-3xl font-semibold">{"492014"}</p>
        <p>
          Number Of <span className="text-secondary">{"Mitigate"}</span> Attacks
        </p>
      </div>
    </div>
  );
};

export default MitigateAttacks;
