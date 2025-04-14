import Image from "next/image";
import { formatDuration } from "@/lib/utils";
import { TGetDuration } from "@/services/get-apis";

const AttackDuration = ({
  getDurationData,
}: {
  getDurationData: TGetDuration;
}) => {
  const { duration } = getDurationData || { duration: 0 };
  const { days, hours, minutes } = formatDuration(duration);

  return (
    <div className="h-full bg-accent/10 rounded-xs flex items-center justify-evenly">
      <div>
        <Image
          src="/icons/measure-tool.png"
          alt="measure-tool"
          width={150}
          height={150}
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center gap-2">
          <div className="border p-2 rounded-sm bg-accent/10 min-w-16 w-full h-full flex items-center justify-center">
            {days}
          </div>
          <p className="text-sm text-input">DAYS</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="border p-2 rounded-sm bg-accent/10 min-w-16 w-full h-full flex items-center justify-center">
            {hours}
          </div>
          <p className="text-sm text-input">HOURS</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="border p-2 rounded-sm bg-accent/10 min-w-16 w-full h-full flex items-center justify-center">
            {minutes}
          </div>
          <p className="text-sm text-input">MINUTES</p>
        </div>
      </div>
      <div>
        <p>
          <span className="text-accent text-lg">Maximum</span> Attack Duration
        </p>
      </div>
    </div>
  );
};

export default AttackDuration;
