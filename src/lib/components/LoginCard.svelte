<script lang="ts">
    import { getRedditInstance } from "$lib/api";
    import { appState } from "$lib/state.svelte";
    import RiotIcon from "$lib/components/icons/RiotIcon.svelte";
    import RedditLogo from "$lib/components/icons/RedditLogo.svelte";

    let loggingIn = $state(false);

    async function handleLogin() {
        loggingIn = true;
        try {
            const data = await getRedditInstance();
            appState.user = data.user;
            appState.riotAccount = data.riotAccount;
        } catch (error) {
            console.error(error);
        } finally {
            loggingIn = false;
        }
    }
</script>

<div class="card">
    <div class="fp-icon-box">
        <RiotIcon/>
    </div>

    <h1>Sync Rank Flair</h1>
    <p class="subtitle">Sign in with Reddit to begin</p>

    <button class="btn btn-reddit btn-full" onclick={handleLogin} disabled={loggingIn}>
        <RedditLogo/>
        {loggingIn ? "Connecting..." : "Continue with Reddit"}
    </button>

    <p class="fine-print">
        We will only access your Reddit username for authentication purposes; no posts
        or messages are read.
    </p>
</div>

<style>
    .fp-icon-box {
        width: 64px;
        height: 64px;
        border-radius: var(--radius-lg);
        background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto var(--space-xl);
        color: var(--c-white);
    }
</style>
