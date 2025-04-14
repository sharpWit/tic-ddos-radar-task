import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date & Time
const date = new Date();

const weekdayFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
});
const weekday = weekdayFormatter.format(date);

// Format date and time in fa-IR calendar with Latin digits
const formatter = new Intl.DateTimeFormat("fa-IR-u-nu-latn", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const parts = formatter.formatToParts(date);

// Extract parts
const year = parts.find((p) => p.type === "year")?.value ?? "";
const month = parts.find((p) => p.type === "month")?.value ?? "";
const day = parts.find((p) => p.type === "day")?.value ?? "";
const hour = parts.find((p) => p.type === "hour")?.value ?? "";
const minute = parts.find((p) => p.type === "minute")?.value ?? "";
const second = parts.find((p) => p.type === "second")?.value ?? "";

// Final
export const finalDateString = `${weekday} - ${year}/${month}/${day}`;
export const finalTimeString = `${hour}:${minute}:${second}`;

// Utility function to convert seconds to days, hours, minutes
export const formatDuration = (seconds: number) => {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return { days, hours, minutes };
};
