import Image from "next/image";
import { finalDateString, finalTimeString } from "@/lib/utils";

const ShowDatatime = () => {
  return (
    <div className="flex items-center gap-6 w-full">
      <div className="flex items-center gap-1">
        <Image
          src="/icons/calendar-schedule.png"
          alt="calendar-schedule"
          width={24}
          height={24}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div>{finalDateString}</div>
      </div>
      <div className="flex items-center gap-1">
        <Image
          src="/icons/clock-time.png"
          alt="clock-time"
          width={24}
          height={24}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div>{finalTimeString}</div>
      </div>
    </div>
  );
};

export default ShowDatatime;
