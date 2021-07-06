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
			<v-menu bottom v-if="review.source">
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon v-bind="attrs" v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item>
						<v-list-item-title @click="handleReport">Report</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</div>
		<v-dialog
			v-model="state.modal"
			max-width="600px"
			min-width="360px"
			height="225px"
		>
			<div class="report-form-wrapper">
				<v-form lazy-validation>
					<v-textarea
						label="Reason"
						v-model="state.reason"
						height="265px"
					></v-textarea>

					<v-spacer></v-spacer>
					<div>
						<v-btn color="success" @click="handleSubmitReport">
							Submit
						</v-btn>
					</div>
				</v-form>
			</div>
		</v-dialog>
	</div>
</template>

<script>
import { computed, reactive } from "@vue/composition-api";
import RestaurantsService from "../../../services/RestaurantsService";
import { EventBus } from "@/main.js";

export default {
	props: {
		review: {
			type: Object,
		},
	},
	setup(props) {
		const state = reactive({
			modal: false,
			reason: "",
		});
		const handleReport = () => {
			state.modal = !state.modal;
		};

		const handleSubmitReport = async () => {
			state.modal = !state.modal;

			const response = await RestaurantsService.reportReview({
				id: props.review.reviewId,
				reason: state.reason,
			});

			EventBus.$emit("alert", response);
		};

		const sentiment = computed(() => {
			return props.review.sentiment === "positive"
				? "😀"
				: props.review.sentiment === "neutral"
				? "😐"
				: "😟";
		});
		return {
			sentiment,
			handleReport,
			state,
			handleSubmitReport,
		};
	},
};
</script>

<style scoped lang="scss">
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

.report-form-wrapper {
	display: flex;
	flex-direction: column;

	padding-right: 10px;
	padding-left: 10px;
	width: 100%;

	::v-deep .v-text-field__slot {
		height: 260px;
	}
}

.review-contents-author,
.review-contents-reviews-amount,
.review-contents-rating,
.review-contents-comment {
	display: flex;
}
</style>
