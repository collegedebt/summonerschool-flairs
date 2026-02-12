<script lang="ts">
    import { onMount } from "svelte";
    import { appState } from "$lib/state.svelte";
    import { getMe } from "$lib/api";

    import LoginCard from "$lib/components/LoginCard.svelte";
    import TopBar from "$lib/components/TopBar.svelte";
    import LinkedAccount from "$lib/components/LinkedAccount.svelte";
    import LinkForm from "$lib/components/LinkForm.svelte";
    import Spinner from "$lib/components/Spinner.svelte";

    let loading = $state(true);

    /*
       For a simple page like this, we can just have the page
       check the session on load. It is stateless every time it is loaded
       and the session cookie (appState) determines what shows.

       This is what onMount is determining; it fills out appState
       depending on getMe(), then the if/else determinations below
       display the relevant component.
     */
    onMount(async () => {
        try {
            const data = await getMe();
            appState.user = data.user;
            appState.riotAccount = data.riotAccount;
        } catch (e) {
            // no session
        } finally {
            loading = false;
        }
    })
</script>

{#if loading}
    <Spinner />

{:else if !appState.user}
    <div class="page center">
        <LoginCard />
    </div>
{:else}
    <div class="page center">
        <TopBar />
        <div class="content">
            {#if appState.riotAccount}
                <LinkedAccount />
            {:else}
                <LinkForm />
            {/if}
        </div>
    </div>
{/if}

<style>
    .page {
        min-height: 100vh;
        padding: 20px;
        color: #f0e6d2;
    }

    .page.center {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .content {
        max-width: 600px;
        margin: 0 auto;
    }
</style>
