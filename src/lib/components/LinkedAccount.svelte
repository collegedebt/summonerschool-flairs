<script lang="ts">
    import { appState } from "$lib/state.svelte";
    import { unlinkRiotAccount } from "$lib/api";
    import Check from "$lib/components/icons/Check.svelte";

    async function handleUnlink() {
        await unlinkRiotAccount();
        appState.riotAccount = null;
    }
</script>

<div class="card">
    <div class="card-header">
        <div class="check-icon">
            <Check />
        </div>
        <h2>Account Linked</h2>
    </div>

    <div class="stats-grid">
        <div class="stat">
            <span class="label">Riot ID</span>
            <span class="value">{appState.riotAccount?.riotId}</span>
        </div>
        <div class="stat">
            <span class="label">Region</span>
            <span class="value">{appState.riotAccount?.regionName}</span>
        </div>
        <div class="stat">
            <span class="label">Level</span>
            <span class="value gold">{appState.riotAccount?.summonerLevel}</span>
        </div>
        <div class="stat">
            <span class="label">Rank</span>
            <span class="value gold">{appState.riotAccount?.rank}</span>
        </div>
    </div>

    <button class="unlink-btn" onclick={handleUnlink}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
        Unlink Account
    </button>
</div>

<style>
    .check-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--c-green-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--c-green);
    }

    h2 {
        font-size: var(--fs-lg);
        margin: 0;
        font-weight: 600;
        color: var(--c-green);
    }

    .stats-grid {
        background: rgb(0 0 0 / 30%);
        border-radius: var(--radius-md);
        padding: var(--radius-xl);
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-md);
    }

    .label {
        display: block;
        color: var(--c-text-dim);
        font-size: var(--fs-xs);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: var(--space-3xs);
    }

    .value {
        color: var(--c-text);
        font-size: var(--fs-md);
    }

    .value.gold {
        color: var(--c-gold);
        font-weight: 600;
    }

    .unlink-btn {
        margin-top: var(--radius-xl);
        background: var(--c-danger-bg);
        border: 1px solid var(--c-danger-brd);
        border-radius: var(--radius-2xs);
        padding: var(--space-2xs) var(--space-lg);
        color: var(--c-red);
        font-size: var(--fs-sm);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: var(--space-3xs);
        transition: background 0.2s;
    }

    .unlink-btn:hover {
        background: var(--c-danger-brd);
    }
</style>