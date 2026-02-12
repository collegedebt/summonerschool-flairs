import type { Region } from "./types";

export const API_BASE = "http://localhost:3000";

export const REGIONS: Region[] = [
    { code: "NA1",  name: "North America" },
    { code: "EUW1", name: "Europe West" },
    { code: "EUN1", name: "Europe Nordic & East" },
    { code: "KR",   name: "Korea" },
    { code: "JP1",  name: "Japan" },
    { code: "BR1",  name: "Brazil" },
    { code: "LA1",  name: "Latin America North" },
    { code: "LA2",  name: "Latin America South" },
    { code: "OC1",  name: "Oceania" },
    { code: "TR1",  name: "Turkey" },
    { code: "RU",   name: "Russia" },
    { code: "PH2",  name: "Philippines" },
    { code: "SG2",  name: "Singapore" },
    { code: "TH2",  name: "Thailand" },
    { code: "TW2",  name: "Taiwan" },
    { code: "VN2",  name: "Vietnam" },
];

export function regionName(code: string): string {
    return REGIONS.find((r) => r.code === code)?.name ?? code;
}
