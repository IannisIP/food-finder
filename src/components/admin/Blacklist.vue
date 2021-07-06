<template>
	<div class="ff-pending-container">
		<div class="wrapper">
			<div class="header">
				{{ "Blacklisted users" }}
			</div>
			<div class="pending-reviews-container">
				<blocked-user
					v-for="(user, i) in state.blockedUsers"
					:key="i"
					:user="user"
					@handleUnblock="handleUnblock($event)"
				/>
			</div>
		</div>
		<loading-overlay v-if="!state.blockedUsers" />
	</div>
</template>

<script>
import { onMounted, reactive } from "@vue/composition-api";
import LoadingOverlay from "../../shared-components/LoadingOverlay.vue";
import UsersService from "../../services/UsersService";
import { EventBus } from "@/main.js";
import BlockedUser from "./partials/BlockedUser.vue";

export default {
	components: { LoadingOverlay, BlockedUser },
	setup() {
		const state = reactive({
			blockedUsers: null,
		});
		onMounted(async () => {
			state.blockedUsers = await UsersService.getBlockedUsers();
		});

		const handleUnblock = async (data) => {
			const response = await UsersService.unblockUser(data);
			state.blockedUsers = await UsersService.getBlockedUsers();

			EventBus.$emit("alert", response.message);
		};

		return { state, handleUnblock };
	},
};
</script>

<style lang="scss" scoped>
.ff-pending-container {
	.wrapper {
		margin-top: 30px;
		.header {
			font-size: 20px;
			font-family: Avenir, Helvetica, Arial, sans-serif;
		}
	}
	.pending-reviews-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 15px;

		.ff-restaurant-card {
			margin: 0px 5px 5px 5px;
		}
	}
}
.ff-pending-card {
	width: 200px;
	margin-left: 5px;
	margin-right: 5px;
}
</style>
