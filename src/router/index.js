import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/dashboard/Dashboard.vue";
import ReviewsHistory from "../components/history/ReviewsHistory.vue";
import PendingReviews from "../components/admin/PendingReviews.vue";
import Blacklist from "../components/admin/Blacklist.vue";
import ReportedReviews from "../components/admin/ReportedReviews.vue";

const routes = [
	{
		path: "/",
		name: "Dashboard",
		component: Dashboard,
		meta: {
			guest: true,
		},
	},
	{
		path: "/history/reviews",
		name: "ReviewsHistory",
		component: ReviewsHistory,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/reviews/pending",
		name: "PendingReviews",
		component: PendingReviews,
		meta: {
			requiresAuth: true,
			is_admin: true,
		},
	},
	{
		path: "/blacklist",
		name: "Blacklist",
		component: Blacklist,
		meta: {
			requiresAuth: true,
			is_admin: true,
		},
	},
	{
		path: "/reviews/reported",
		name: "ReportedReviews",
		component: ReportedReviews,
		meta: {
			requiresAuth: true,
			is_admin: true,
		},
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (localStorage.getItem("jwt") == null) {
			//daca nu e logat
			//emit open logging dialog.
		} else {
			let user = JSON.parse(localStorage.getItem("user"));
			if (to.matched.some((record) => record.meta.isAdmin)) {
				if (user.isAdmin === 1) {
					next();
				} else {
					next({ name: "ReviewsHistory" });
				}
			} else {
				next();
			}
		}
	} else if (to.matched.some((record) => record.meta.guest)) {
		if (localStorage.getItem("jwt") == null) {
			next();
		}
		// else {
		// 	next({ name: "userboard" });
		// }
	} else {
		next();
	}
});

Vue.use(VueRouter);

export default router;
