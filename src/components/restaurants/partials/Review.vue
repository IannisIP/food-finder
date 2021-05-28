<template>
	<div class="ff-review">
		<div class="reviewer-image">
			<v-icon>mdi-account-circle </v-icon>
			<v-icon v-if="review.confirmed">mdi-check-decagram</v-icon>
		</div>
		<div class="review-contents-wrapper">
			<div>
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
			<div class="review-sentiment">{{ sentiment }}</div>
		</div>
	</div>
</template>

<script>
import { computed } from "@vue/composition-api";
export default {
	props: {
		review: {
			type: Object,
		},
	},
	setup(props) {
		const sentiment = computed(() => {
			return props.review.sentiment === "positive"
				? "😀"
				: props.review.sentiment === "neutral"
				? "😐"
				: "😟";
		});
		return {
			sentiment,
		};
	},
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
	flex-direction: row;
	justify-content: space-between;
}

.review-contents-author,
.review-contents-reviews-amount,
.review-contents-rating,
.review-contents-comment {
	display: flex;
}
</style>
