import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/dashboard/Dashboard.vue";
import ReviewsHistory from "../components/history/ReviewsHistory.vue";
import PendingReviews from "../components/admin/PendingReviews.vue";
import Blacklist from "../components/admin/Blacklist.vue";
import ReportedReviews from "../components/admin/ReportedReviews.vue";
import AccountService from "../services/AccountService";

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
			isAdmin: true,
		},
	},
	{
		path: "/blacklist",
		name: "Blacklist",
		component: Blacklist,
		meta: {
			requiresAuth: true,
			isAdmin: true,
		},
	},
	{
		path: "/reviews/reported",
		name: "ReportedReviews",
		component: ReportedReviews,
		meta: {
			requiresAuth: true,
			isAdmin: true,
		},
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

router.beforeEach(async (to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		const jwt = localStorage.getItem("jwt");
		if (jwt === null) {
			//daca nu e logat
			//emit open logging dialog.
		} else {
			const user = await AccountService.getUserInfo(jwt);

			if (to.matched.some((record) => record.meta.isAdmin)) {
				if (user.isAdmin === 1) {
					next();
				} else {
					next({ name: "Dashboard" });
				}
			} else {
				next();
			}
		}
	} else if (to.matched.some((record) => record.meta.guest)) {
		next();
	} else {
		next({ name: "Dashboard" });
	}
});

Vue.use(VueRouter);

export default router;
