<template>
	<div class="ff-review">
		<div class="reviewer-image"><v-icon>mdi-account-circle </v-icon></div>
		<div class="review-contents-wrapper">
			<div class="review-contents-author">{{ review.author_name }}</div>
			<div class="review-contents-reviews-amount">
				{{ review.reviewsAmount }}
			</div>
			<div class="review-contents-rating">
				<v-rating
					:value="review.rating"
					color="amber"
					dense
					half-increments
					readonly
					size="14"
				></v-rating>
			</div>
			<div class="review-contents-comment">{{ review.text }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		review: {
			type: Object,
		},
	},
	setup() {},
};
</script>

<style scoped>
.ff-review {
	display: flex;
	margin-left: 30px;
	margin-bottom: 24px;
}

.reviewer-image {
	margin-right: 20px;
}

.review-contents-wrapper {
	width: 100%;
	margin-right: 30px;
	display: flex;
	flex-direction: column;
}

.review-contents-author,
.review-contents-reviews-amount,
.review-contents-rating,
.review-contents-comment {
	display: flex;
}
</style>
