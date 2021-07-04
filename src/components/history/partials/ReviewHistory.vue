<template>
	<div class="ff-restaurant-card">
		<v-card class="mx-auto my-1" max-width="374">
			<v-card-title>{{ review.name }}</v-card-title>
			<v-card-text>
				<v-text-field
					:value="review.reviewText"
					label="Review"
					readonly
				></v-text-field>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	props: {
		review: {
			type: Object,
		},
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
