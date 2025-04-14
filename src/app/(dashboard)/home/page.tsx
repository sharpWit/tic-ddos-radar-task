import AttackDuration from "@/app/(dashboard)/home/_components/attack-duration";
import AttackVolume from "@/app/(dashboard)/home/_components/attack-volume";
import DdosAttacks from "@/app/(dashboard)/home/_components/ddos-attacks";
import MitigateAttacks from "@/app/(dashboard)/home/_components/mitigate-attacks";

export default function Page() {
  return (
    <div className="space-y-3 h-full">
      <div className="w-1/2">
        <p>
          The Radar report has been extracted from the data of the 
          <span className="text-accent">SIWAN</span> DDoS detection and
          Mitigation system, which has been deployed and operated by the TIC
          company as the country's defense shield, providing effective
          protection against attacks.
        </p>
      </div>
      <div className="mt-6 col-span-2 grid grid-cols-2 gap-3 max-h-[310px] h-full">
        <div className="flex w-full">
          <MitigateAttacks />
          <DdosAttacks />
        </div>
        <div className="max-w-1/2">
          <AttackVolume />
        </div>
      </div>
      <div className="max-h-[108px] w-1/2 h-full">
        <AttackDuration />
      </div>
    </div>
  );
}
