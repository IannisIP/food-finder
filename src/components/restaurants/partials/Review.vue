<template>
	<div class="ff-review">
		{{ review.comment }}
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
