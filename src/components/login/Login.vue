<template>
	<v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
		<div>
			<v-tabs
				v-model="state.tab"
				show-arrows
				background-color="deep-purple accent-4"
				icons-and-text
				dark
				grow
			>
				<v-tabs-slider color="purple darken-4"></v-tabs-slider>
				<v-tab v-for="i in state.tabs" :key="i">
					<v-icon large>{{ i.icon }}</v-icon>
					<div class="caption py-1">{{ i.name }}</div>
				</v-tab>
				<v-tab-item>
					<v-card class="px-4">
						<v-card-text>
							<v-form ref="loginForm" v-model="state.valid" lazy-validation>
								<v-row>
									<v-col cols="12">
										<v-text-field
											v-model="state.loginEmail"
											:rules="state.loginEmailRules"
											label="E-mail"
											required
										></v-text-field>
									</v-col>
									<v-col cols="12">
										<v-text-field
											v-model="state.loginPassword"
											:append-icon="state.show1 ? 'eye' : 'eye-off'"
											:rules="[state.rules.required, state.rules.min]"
											:type="state.show1 ? 'text' : 'password'"
											name="input-10-1"
											label="Password"
											hint="At least 8 characters"
											counter
											@click:append="state.show1 = !state.show1"
										></v-text-field>
									</v-col>
									<v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
									<v-spacer></v-spacer>
									<v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
										<v-btn
											x-large
											block
											:disabled="!state.valid"
											color="success"
											@click="state.validate"
										>
											Login
										</v-btn>
									</v-col>
								</v-row>
							</v-form>
						</v-card-text>
					</v-card>
				</v-tab-item>
				<v-tab-item>
					<v-card class="px-4">
						<v-card-text>
							<v-form ref="registerForm" v-model="state.valid" lazy-validation>
								<v-row>
									<v-col cols="12" sm="6" md="6">
										<v-text-field
											v-model="state.firstName"
											:rules="[state.rules.required]"
											label="First Name"
											maxlength="20"
											required
										></v-text-field>
									</v-col>
									<v-col cols="12" sm="6" md="6">
										<v-text-field
											v-model="state.lastName"
											:rules="[state.rules.required]"
											label="Last Name"
											maxlength="20"
											required
										></v-text-field>
									</v-col>
									<v-col cols="12">
										<v-text-field
											v-model="state.email"
											:rules="state.emailRules"
											label="E-mail"
											required
										></v-text-field>
									</v-col>
									<v-col cols="12">
										<v-text-field
											v-model="state.password"
											:append-icon="state.show1 ? 'mdi-eye' : 'mdi-eye-off'"
											:rules="[state.rules.required, state.rules.min]"
											:type="state.show1 ? 'text' : 'password'"
											name="input-10-1"
											label="Password"
											hint="At least 8 characters"
											counter
											@click:append="state.show1 = !state.show1"
										></v-text-field>
									</v-col>
									<v-col cols="12">
										<v-text-field
											block
											v-model="state.verify"
											:append-icon="state.show1 ? 'mdi-eye' : 'mdi-eye-off'"
											:rules="[state.rules.required, state.passwordMatch]"
											:type="state.show1 ? 'text' : 'password'"
											name="input-10-1"
											label="Confirm Password"
											counter
											@click:append="state.show1 = !state.show1"
										></v-text-field>
									</v-col>
									<v-spacer></v-spacer>
									<v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
										<v-btn
											x-large
											block
											:disabled="!state.valid"
											color="success"
											@click="state.validate"
											>Register</v-btn
										>
									</v-col>
								</v-row>
							</v-form>
						</v-card-text>
					</v-card>
				</v-tab-item>
			</v-tabs>
		</div>
	</v-dialog>
</template>

<script>
import { computed, reactive } from "@vue/composition-api";
export default {
	name: "Login",
	props: {
		source: {
			type: String,
		},
		dialog: {
			type: Boolean,
		},
	},
	setup(props, context) {
		const dialog = computed({
			get: () => props.dialog,
			set: (value) => context.emit("changeDialog", value),
		});

		const state = reactive({
			loginForm: context.refs.loginForm,
			form: context.refs.form,
			tab: 0,
			tabs: [
				{ name: "Login", icon: "mdi-account" },
				{ name: "Register", icon: "mdi-account-outline" },
			],
			valid: true,
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			verify: "",
			loginPassword: "",
			loginEmail: "",
			loginEmailRules: [
				(v) => !!v || "Required",
				(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
			],
			emailRules: [
				(v) => !!v || "Required",
				(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
			],
			show1: false,
			rules: {
				required: (value) => !!value || "Required.",
				min: (v) => (v && v.length >= 8) || "Min 8 characters",
			},
		});

		const passwordMatch = computed(() => {
			return state.password === state.verify || "Password must match";
		});

		const validate = () => {
			if (state.loginForm.validate()) {
				// submit form to server/API here...
			}
		};
		const reset = () => {
			state.form.reset();
		};
		const resetValidation = () => {
			state.form.resetValidation();
		};

		return {
			passwordMatch,
			validate,
			resetValidation,
			reset,
			state,
			dialog,
		};
	},
};
</script>

<style>
.v-overlay.v-overlay--active,
.v-dialog__content {
	z-index: 999 !important;
}
</style>
