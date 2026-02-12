export interface Redditor {
    redditUsername: string;
    redditAvatar: string | null;
    karma: number;
}

export interface RiotAccount {
    riotId: string;
    region: string;
    regionName: string;
    summonerLevel: number;
    rank: string;
    verified: boolean;
}

export interface Region {
    code: string;
    name: string;
}

export interface SessionResponse {
    user: Redditor;
    riotAccount: RiotAccount | null;
}