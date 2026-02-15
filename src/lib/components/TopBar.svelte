<script lang="ts">
    import { appState } from "$lib/state.svelte";
    import { logout } from "$lib/api";
    import Logout from "./icons/Logout.svelte";

    async function handleLogout(): Promise<void> {
        await logout();
        appState.logout();
    }
</script>

<header>
    <div class="user-info">
        <img class="avatar" src={appState.user?.redditAvatar} alt="Reddit Profile" />
        <div>
            <div class="username">u/{appState.user?.redditUsername}</div>
            <div class="karma">{appState.user?.karma.toLocaleString()} karma</div>
        </div>
    </div>

    <button class="logout-btn" onclick={handleLogout}>
        <Logout />
        Sign out
    </button>
</header>

<style>
    header {
        max-width: 600px;
        margin: 0 auto var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-md) 0;
        z-index: 1;
    }

    .user-info {
        display: flex;
        align-items: center;
        gap: var(--radius-md);
    }

    .avatar {
        width: 36px;
        height: 36px;
        border-radius: var(--radius-2xs);
        background: var(--c-reddit);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--c-white);
        font-weight: 700;
        font-size: var(--fs-base);
    }

    .username {
        color: var(--c-text);
        font-size: var(--fs-md);
        font-weight: 600;
    }

    .karma {
        color: var(--c-text-muted);
        font-size: var(--fs-2xs);
    }

    .logout-btn {
        background: rgb(255 255 255 / 6%);
        border: 1px solid var(--c-border);
        border-radius: var(--radius-sm);
        margin-left: var(--space-xl);
        padding: var(--space-xs) var(--radius-md);
        color: var(--c-text-muted);
        font-size: var(--fs-sm);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: var(--space-xs);
        transition: background 0.2s;
    }

    .logout-btn:hover {
        background: rgb(255 255 255 / 10%);
    }
</style>