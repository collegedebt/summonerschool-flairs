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
        <img class="avatar" src="{appState.user?.redditAvatar}" alt="Reddit Profile Picture" />
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
        max-width: 600px; margin: 0 auto 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 0;
        z-index: 1;
    }

    .user-info {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .avatar {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: var(-c-reddit);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(-c-white);
        font-weight: 700;
        font-size: 14px;
    }

    .username {
        color: var(--c-text);
        font-size: var(--fs-md);
        font-weight: 600;
    }

    .karma { color: var(--c-text-muted); font-size: 12px; }

    .logout-btn {
        background: rgba(255,255,255,0.06);
        border: 1px solid var(--c-border);
        border-radius: 8px;
        margin-left: 24px;
        padding: 8px 12px;
        color: #a09b8c;
        font-size: 13px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: background 0.2s;
    }
    .logout-btn:hover {
        background: rgba(255,255,255,0.1);
    }
</style>