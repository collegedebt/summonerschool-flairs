<script lang="ts">
    import { appState } from "$lib/state.svelte";
    import { linkRiotAccount } from "$lib/api";
    import { REGIONS } from "$lib/constants";

    let showForm = $state(false);
    let gameName = $state("");
    let tagLine = $state("");
    let region = $state(REGIONS[0].name);
    let linking = $state(false);
    let error = $state("");

    function reset(): void {
        showForm = false;
        gameName = "";
        tagLine = "";
        error = "";
    }

    async function handleSubmit(): Promise<void> {
        if (!gameName.trim()) { error = "Please enter your game name."; return; }
        if (!tagLine.trim()) { error = "Please enter your tagline."; return; }

        error = "";
        linking = true;
        try {
            appState.riotAccount = await linkRiotAccount(gameName, tagLine, region);
            reset();
        } catch (err) {
            error = err instanceof Error ? err.message : "Something went wrong";
        } finally {
            linking = false;
        }
    }
</script>

<div class="card">
    <div class="card-header">
        <div class="icon-box">
            <img
                src={appState.user?.redditAvatar ?? "/img/default_profile_picture.png"}
                alt="Profile"
            />
        </div>
        <h2>Hello, {appState.user?.redditUsername}!</h2>
    </div>
    <p class="subtitle">
        Link your Riot account to your Reddit account so we can fetch rank data.
    </p>

    {#if !showForm}
        <button class="btn btn-gold btn-full" onclick={() => (showForm = true)}>Link
            Account</button>
    {:else}
        <label class="field">
            <span class="field-label">Region</span>
            <select bind:value={region}>
                {#each REGIONS as r (r.code)}
                    <option value={r.code}>{r.name} ({r.code})</option>
                {/each}
            </select>
        </label>

        <div class="row">
            <label class="field flex-2">
                <span class="field-label">Game Name</span>
                <input bind:value={gameName} placeholder="e.g. Faker" />
            </label>
            <label class="field flex-1">
                <span class="field-label">Tagline</span>
                <input bind:value={tagLine} placeholder="e.g. KR1" />
            </label>
        </div>

        {#if error}
            <div class="error-msg">{error}</div>
        {/if}

        <div class="row">
            <button class="btn btn-ghost flex-1" onclick={reset}>Cancel</button>
            <button class="btn btn-gold flex-2" onclick={handleSubmit} disabled={linking}>
                {linking ? "Verifying..." : "Link Account"}
            </button>
        </div>

        <p class="fine-print">
            We will verify your account via the Riot Games API. Your Riot ID is used to fetch
            public game data only.
        </p>
    {/if}
</div>
