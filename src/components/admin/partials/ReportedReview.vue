<template>
	<div class="ff-restaurant-card">
		<v-card class="mx-auto my-1" max-width="374">
			<v-card-title>{{ review.name }}</v-card-title>
			<v-card-text>
				<div>
					Reviewer:
					{{
						review.review.author["first_name"] +
							" " +
							review.review.author["last_name"]
					}}
				</div>
				<div>Review: {{ review.review.text }}</div>
				<div>Report reason: {{ review.reported.reason }}</div>
				<br />
				<div>
					Reported by:
					{{
						review.reported.user["first_name"] +
							" " +
							review.reported.user["last_name"]
					}}
				</div>

				<div class="btn-wrapper">
					<v-btn @click="handlePreview" v-if="review.hasReceipt"
						>Preview Receipt</v-btn
					>
					<v-btn @click="handleIgnore" color="primary">Ignore report</v-btn>
					<v-btn @click="handleRemoveReview" color="error">Remove review</v-btn>
				</div>
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
	setup(props, context) {
		const handleIgnore = () => {
			context.emit("handleIgnore", props.review.reported.id);
		};
		const handleRemoveReview = () => {
			context.emit("handleRemoveReview", {
				id: props.review.review.id,
				reportedId: props.review.reported.id,
			});
		};

		return {
			handleIgnore,
			handleRemoveReview,
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
