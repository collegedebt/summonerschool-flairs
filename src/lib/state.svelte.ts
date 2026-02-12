import type { Redditor, RiotAccount } from "$lib/types";

/**
 * The runes here determine the state of the app at any page
 * "Reactive": the framework's ability to sync the application state to the DOM.
 * All we need to do right now is to consider the logged/linked states.
 */

let _user = $state<Redditor | null>(null);
let _riotAccount = $state<RiotAccount | null>(null);

export const appState = {
    get user() { return _user; },
    set user(v: Redditor | null) { _user = v; },

    get riotAccount() { return _riotAccount; },
    set riotAccount(v: RiotAccount | null) { _riotAccount = v; },

    logout() {
        _user = null;
        _riotAccount = null;
    }
};