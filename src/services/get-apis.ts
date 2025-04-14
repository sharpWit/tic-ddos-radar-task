import fetch from "node-fetch";
import https from "https";

const API_BASE_URL = process.env.API_BASE_URL ?? "https://api-ddos.tic.ir/api";

export type TCountChartData = { count: number };
export const getCountChart = async (): Promise<TCountChartData> => {
  try {
    const res = await fetch(`${API_BASE_URL}/count-chart`, {
      agent: new https.Agent({ rejectUnauthorized: false }), // Bypass SSL in dev
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = (await res.json()) as TCountChartData;
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export type TGetSumData = { count: number; sum: number };
export const getSumPps = async (): Promise<TGetSumData> => {
  try {
    const res = await fetch(`${API_BASE_URL}/sum-pps`, {
      agent: new https.Agent({ rejectUnauthorized: false }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = (await res.json()) as TGetSumData;
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const getSumLrl = async (): Promise<TGetSumData> => {
  try {
    const res = await fetch(`${API_BASE_URL}/sum-lrl`, {
      agent: new https.Agent({ rejectUnauthorized: false }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = (await res.json()) as TGetSumData;
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export type TGeTop = { value: number }[];
export const getTopFiveLrl = async (): Promise<TGeTop> => {
  try {
    const res = await fetch(`${API_BASE_URL}/top-five-lrl`, {
      agent: new https.Agent({ rejectUnauthorized: false }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = (await res.json()) as TGeTop;
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export type TGetDuration = { duration: number };
export const getDuration = async (): Promise<TGetDuration> => {
  try {
    const res = await fetch(`${API_BASE_URL}/duration`, {
      agent: new https.Agent({ rejectUnauthorized: false }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = (await res.json()) as TGetDuration;
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
