import { API_BASE, regionName } from "$lib/constants";
import type { SessionResponse, RiotAccount } from "$lib/types";

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${API_BASE}${path}`, {
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            ...options.headers },
            ...options,
    });

    if (!response.ok) {
        const body = await response.json().catch((e) => console.error(e));
        throw new Error(body);
    }

    return await response.json() as Promise<T>;
}

export async function getMe(): Promise<SessionResponse> {
    /**
     * Dud method for testing purposes
     * GET /api/me
     */
    throw new Error("Unimplemented");
}

export async function getRedditInstance(): Promise<SessionResponse> {
    /**
     * Dud method for testing purposes
     * Returns a logged in instance without a Riot Account linked.
     * GET /auth/reddit
     */
    await delay(3000);
    return {
        user: { redditUsername: "TestUsername", redditAvatar: "/img/default_profile_picture.png", karma: 142 },
        riotAccount: null,
    };
}

export async function linkRiotAccount(gameName: string, tagLine: string, region: string): Promise<RiotAccount> {
    /**
     * Dud method for testing purposes
     * Returns an instance of a linked Riot account
     * POST /api/link-riot
     */
    if (!gameName.trim()) {throw new Error("Game Name is required");}
    if (!tagLine.trim()) {throw new Error("TagLine is required");}
    if (!region.trim()) {throw new Error("Region is required");}

    await delay(3000);
    return {
        riotId: `${gameName.trim()}#${tagLine.trim()}`,
        region,
        regionName: regionName(region),
        summonerLevel: 214,
        rank: "Emerald II",
        verified: true,
    }
}

export async function unlinkRiotAccount(): Promise<void> {
    /**
     * Dud method for testing purposes
     * Simulates an unlink of a Riot account
     * DELETE api/link-riot
     */
    await delay(1000);
}

export async function logout(): Promise<void> {
    /**
     * Dud method for testing purposes
     * Simulates a logout
     */
    await delay(100);
}