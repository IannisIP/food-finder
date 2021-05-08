import { state } from "./state/state";
import { actions } from "./actions/actions";
import { mutations } from "./mutations/mutations";
import { getters } from "./getters/getters";

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
