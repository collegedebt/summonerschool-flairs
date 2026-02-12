<!-- The base layout applies to every page.-->

<script lang="ts">
	import type { Snippet } from "svelte";
	import favicon from '$lib/assets/favicon.svg';
	let { children }: { children: Snippet } = $props();
	import "$lib/styles/global.css";
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

