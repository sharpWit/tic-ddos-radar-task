import Image from "next/image";
import { TGeTop } from "@/services/get-apis";

const AttackVolume = ({ getTopFiveLrlData }: { getTopFiveLrlData: TGeTop }) => {
  // Convert bits to Gbps
  const attacksInGbps =
    getTopFiveLrlData?.map((attack) => ({
      value: attack.value / 1000000000,
      formatted: (attack.value / 1000000000).toFixed(1),
    })) || [];

  // the maximum attack volume
  const maxAttack =
    attacksInGbps.length > 0
      ? Math.max(...attacksInGbps.map((a) => a.value))
      : 0;

  return (
    <div className="border h-full bg-sidebar rounded-xs py-3 px-2 flex flex-col justify-evenly space-y-6 min-w-max">
      <div className="flex items-center gap-3">
        <Image src="/icons/rocket.png" alt="rocket" width={50} height={50} />
        <div>
          <p>Maximum Attack Volumes</p>
          <p className="text-xs text-input">TOP 5 ATTACKS (GBPS)</p>
        </div>
      </div>

      <div>
        <div className="flex gap-1">
          <p className="text-accent text-3xl">{maxAttack.toFixed(1)}</p>
          <p className="text-muted-foreground text-xs self-end">Gbps</p>
        </div>
        <p className="text-balance">
          Maximum Volume Of The{" "}
          <span className="text-secondary">Mitigated</span> Attacks
        </p>
      </div>

      <div className="flex items-center gap-2 w-full overflow-hidden justify-center">
        {attacksInGbps.slice(0, 4).map((attack, index) => (
          <div
            key={index}
            className="border rounded-md w-fit p-1 flex items-center justify-center gap-1"
          >
            <p className="text-muted-foreground text-xs">{attack.formatted}</p>
            <p className="text-muted-foreground text-xs">Gbps</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttackVolume;
