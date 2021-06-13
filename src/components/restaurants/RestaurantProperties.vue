<template>
	<div class="ff-restaurant-properties">
		<div class="ff-restaurant-header">
			<div class="title">{{ restaurant.name }}</div>
			<div class="close-panel-btn">
				<v-btn icon @click="handleClose">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</div>
		</div>
		<div class="ff-restaurant-details">
			<div>{{ restaurant.formatted_address }}</div>
			<div>{{ restaurant.international_phone_number }}</div>
			<v-btn @click="handleAddReview">Add review</v-btn>
		</div>
		<div class="ff-restaurant-services-container">
			<div v-for="(service, i) in restaurant.services" :key="i">
				<v-icon>mdi-check</v-icon> <span>{{ service }} </span>
			</div>
		</div>
		<div class="ff-restaurant-reviews">
			<div v-if="reviews.length">
				<div class="ff-restaurant-title">{{ "Reviews:" }}</div>
				<div v-for="(review, i) in reviews" :key="i">
					<review :review="review" />
				</div>
				<v-progress-circular
					indeterminate
					color="red"
					v-if="!reviews.length"
				></v-progress-circular>
			</div>
			<div v-else>No maps reviews</div>
		</div>
		<div class="review-form">
			<v-dialog v-model="state.dialog" max-width="600px" min-width="360px">
				<div>
					<div>
						Please tell others your experience
					</div>
					<div class="review-form-wrapper">
						<v-form lazy-validation>
							<v-row class="column">
								<v-col cols="12">
									<v-textarea
										label="Review"
										v-model="state.review"
									></v-textarea>
								</v-col>

								<v-col>
									<v-file-input label="Upload receipt" v-model="state.file">
									</v-file-input>
								</v-col>
								<v-spacer></v-spacer>
								<div>
									<v-btn color="success" @click="handleSubmitReview">
										Submit
									</v-btn>
								</div>
							</v-row>
						</v-form>
					</div>
				</div>
			</v-dialog>
		</div>
	</div>
</template>

<script>
import Review from "./partials/Review";
import { computed, onMounted, reactive, watch } from "@vue/composition-api";
import RestaurantsService from "../../services/RestaurantsService";

export default {
	components: {
		Review,
	},
	setup(props, context) {
		const store = context.root.$store;
		const state = reactive({
			dialog: false,
			review: "",
			file: [],
		});

		onMounted(() => {
			store.dispatch("GET_REVIEWS");
		});

		watch(
			() => store.getters["GET_CURRENT_SELECTION"]?.name,
			(restaurant) => {
				restaurant && store.dispatch("GET_REVIEWS");
			}
		);
		const reviews = computed(() => store.getters["GET_REVIEWS"]);
		//TODO: here we use the selected restaurants propertis and dispatch request for getting reviews by restaurant id
		const restaurant = computed(() => store.getters["GET_CURRENT_SELECTION"]);

		const handleAddReview = () => {
			state.dialog = !state.dialog;
		};

		const handleSubmitReview = async () => {
			const placeId = store.getters["GET_CURRENT_SELECTION"]["place_id"];
			const response = await RestaurantsService.postReview({
				review: state.review,
				file: state.file,
				placeId: placeId,
			});
			state.dialog = !state.dialog;

			alert(response.message);
		};
		return {
			state,
			restaurant,
			reviews,
			handleClose: () => {
				store.dispatch("SET_CURRENT_SELECTION", null);
				store.dispatch("SET_PROPERTIES_OPEN", false);
			},
			handleAddReview,
			handleSubmitReview,
		};
	},
};
</script>

<style lang="scss" scoped>
.ff-restaurant-properties {
	position: absolute;
	left: 320px;
	z-index: 999;
	background: #fff;
	width: 400px;
	height: 628px;

	margin: 5px 0px 0px 5px;

	border: 1px solid #dfe1e5;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);

	.ff-restaurant-header {
		display: flex;
		justify-content: space-between;
		margin-left: 30px;
	}

	.ff-restaurant-title {
		display: flex;
		margin-bottom: 24px;
		margin-left: 30px;
	}

	.ff-restaurant-reviews {
		margin-top: 24px;
		overflow-y: scroll;
		height: 530px;
	}
}
</style>

<style lang="scss">
.v-dialog {
	background: #fff !important;
	max-width: 550px;
	height: 350px;

	::v-deep .row {
		margin: 0px;
	}

	.review-form-wrapper {
		margin-left: 20px;
		margin-right: 20px;
	}

	.column {
		flex-direction: column !important;
	}
}
</style>
