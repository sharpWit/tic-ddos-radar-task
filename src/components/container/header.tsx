import ShowDatatime from "@/components/container/show-datatime";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 py-[38px] px-8 max-h-[102px] h-full w-full">
      <div className="w-full h-full flex items-center justify-between pl-[120px] mx-auto">
        <div>
          <h1 className="text-[28px] font-semibold">TIC DDoS Radar</h1>
        </div>
        <div>
          <ShowDatatime />
        </div>
      </div>
    </header>
  );
};

export default Header;
