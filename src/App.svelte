<script>
	import Notification from "./lib/Notification.svelte";
	import { notifications, markAllAsRead } from "./stores";

	$: unreadCount = $notifications.filter(item => item.unread === true).length;
</script>

<div class="card">
	<header>
		<h1>Notifications</h1>
		<span class="unread-count">{unreadCount}</span>
		<button on:click={markAllAsRead} type="button">Mark all as read</button>
	</header>

	{#each $notifications as notification (notification.id)}
		<Notification {...notification} />
	{/each}

</div>

<style>
	.card {
		max-width: 730px;
		margin: 0 20px;
		margin-top: 63px;
		border-radius: 15px;
		background: var(--white);
		box-shadow: 0px 20px 60px 0px rgba(73, 97, 168, 0.05);
		padding: 33px 30px 10px 32px;
	}

	header {
		display: flex;
		align-items: center;
		margin-bottom: 31px;
	}

	h1 {
		font-size: 24px;
		font-weight: 800;
		color: var(--very-dark-grey-blue);
	}

	.unread-count {
		width: 32px;
		height: 25px;
		border-radius: 6px;
		background: var(--blue);
		font-size: 16px;
		font-weight: 800;
		line-height: 25px;
		text-align: center;
		color: var(--white);
		margin-left: 11px;
	}

	button {
		font-size: 16px;
		font-weight: 500;
		color: var(--dark-grey-blue);
		margin-left: auto;
		cursor: pointer;
		transition: color 0.2s;
	}

	button:hover {
		color: var(--blue);
	}

	@media (max-width: 650px) {
		.card {
			margin: 0;
			border-radius: 0px;
			box-shadow: none;
			padding: 24px 16px 10px 16px;
		}

		header {
			margin-bottom: 24px;
		}

		h1 {
			font-size: 20px;
		}

		.unread-count {
			margin-left: 9px;
		}

		button {
			font-size: 14px;
		}
	}

</style>
