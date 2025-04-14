import { TGetSumData } from "@/services/get-apis";

const DdosAttacks = ({
  getSumPpsData,
  getSumLrlData,
}: {
  getSumPpsData: TGetSumData;
  getSumLrlData: TGetSumData;
}) => {
  return (
    <div className="border w-7/12 h-full bg-sidebar rounded-r-xs p-8">
      <p>Cumulative Sum of Mitigated DDoS Attacks</p>
      <div className="flex items-center justify-center w-full h-full py-5">
        <div className="border p-3 space-y-1 w-1/2 h-full place-content-center">
          <p className="text-accent text-sm">Billion Packets</p>
          <p className="text-3xl">{getSumPpsData.count}</p>
          <p className="text-muted-foreground">
            Total Number of Dropped Packets
          </p>
        </div>
        <div className="border p-3 space-y-1 w-1/2 h-full place-content-center">
          <p className="text-accent text-sm">Peta Bytes</p>
          <p className="text-3xl">{getSumLrlData.count}</p>
          <p className="text-muted-foreground">Total Number of Dropped Bytes</p>
        </div>
      </div>
    </div>
  );
};

export default DdosAttacks;
