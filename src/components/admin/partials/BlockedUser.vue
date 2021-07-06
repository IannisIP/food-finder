<template>
	<div class="ff-blocked-user-card">
		<v-card class="mx-auto my-1" max-width="374">
			<v-card-text>
				<v-text-field :value="user.name" label="Name" readonly></v-text-field>
				<v-text-field :value="user.email" label="Email" readonly></v-text-field>
				<v-textarea
					filled
					label="Reason"
					auto-grow
					readonly
					:value="user.reason"
				></v-textarea>

				<v-btn @click="handleUnblock" color="primary">UNBLOCK</v-btn>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	props: {
		user: {
			type: Object,
		},
	},
	setup(props, context) {
		const handleUnblock = () => {
			context.emit("handleUnblock", props.user.id);
		};

		return {
			handleUnblock,
		};
	},
};
</script>

<style scoped lang="scss">
.btn-wrapper {
	display: flex;
	flex-direction: column;

	::v-deep .v-btn {
		margin-top: 5px;
		margin-bottom: 5px;
	}
}
</style>
