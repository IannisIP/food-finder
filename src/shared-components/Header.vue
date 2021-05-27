<template>
	<div>
		<v-app-bar color="white">
			<v-toolbar-title id="toolbar-title" @click="goHome">
				<svg
					width="200px"
					height="60px"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="22.97374877929687 9.303825378417969 454.05250244140626 131.39234924316406"
					style="background: none;"
					preserveAspectRatio="xMidYMid"
				>
					<defs>
						<linearGradient
							id="editing-incredible-gradient"
							x1="-0.41354545764260087"
							x2="1.4135454576426008"
							y1="0.09326335692419985"
							y2="0.9067366430758002"
						>
							<stop offset="0" stop-color="#c6d8ff"></stop>
							<stop offset="1" stop-color="#94a9ce"></stop>
						</linearGradient>
						<filter
							id="editing-incredible"
							x="-100%"
							y="-100%"
							width="300%"
							height="300%"
						>
							<feFlood
								flood-color="#000"
								flood-opacity="0.5"
								result="flood"
								x="10"
								y="10"
								width="480"
								height="130"
							></feFlood>
							<feFlood flood-color="#292664" result="flood-stroke"></feFlood>
							<feFlood flood-color="#f5f4fa" result="flood-outline"></feFlood>
							<feFlood flood-color="#f2bed1" result="flood-shadow"></feFlood>
							<feImage
								x="0"
								y="0"
								width="500"
								height="150"
								xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHdpZHRoPSI1MDAiIGhlaWdodD0iMTUwIj48cmFkaWFsR3JhZGllbnQgaWQ9ImluY3JlZGlibGUtZ3JhZGllbnQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U0ZTRlNCIvPjwvcmFkaWFsR3JhZGllbnQ+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9InVybCgjaW5jcmVkaWJsZS1ncmFkaWVudCkiLz48L3N2Zz4="
								result="image"
							></feImage>
							<feImage
								x="0"
								y="0"
								width="10"
								height="10"
								xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiLz48L3N2Zz4="
								result="dot"
							></feImage>
							<feTile in="dot" result="tile"></feTile>
							<feGaussianBlur
								stdDeviation="1.5"
								result="blur-tile"
							></feGaussianBlur>
							<feBlend in2="image" in="blur-tile" mode="soft-light"></feBlend>
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0"
							></feColorMatrix>
							<feComponentTransfer result="func">
								<feFuncA type="linear" slope="20" intercept="-10.5"></feFuncA>
							</feComponentTransfer>
							<feComposite
								operator="out"
								in="flood"
								in2="func"
								result="dots"
							></feComposite>
							<feOffset dx="3" dy="1" in="SourceAlpha"></feOffset>
							<feComposite operator="out" in2="SourceAlpha"></feComposite>
							<feComponentTransfer result="extrude">
								<feFuncA type="linear" slope="0.7" intercept="-0.1"></feFuncA>
							</feComponentTransfer>
							<feMorphology
								operator="dilate"
								radius="5"
								in="SourceGraphic"
								result="dilate"
							></feMorphology>
							<feComposite
								operator="in"
								in="flood-stroke"
								in2="dilate"
								result="stroke"
							></feComposite>
							<feOffset dx="1" dy="0" result="stroke-offset"></feOffset>
							<feMorphology
								operator="dilate"
								radius="2"
								result="dilate-outline"
							></feMorphology>
							<feComposite
								operator="in"
								in="flood-outline"
								in2="dilate-outline"
								result="outline"
							></feComposite>
							<feComposite
								operator="in"
								in="flood-shadow"
								in2="outline"
							></feComposite>
							<feGaussianBlur stdDeviation="3"></feGaussianBlur>
							<feComponentTransfer>
								<feFuncA type="linear" slope="0.7" intercept="-0.2"></feFuncA>
							</feComponentTransfer>
							<feOffset dx="0" dy="4" result="offset-shadow"></feOffset>
							<feMerge>
								<feMergeNode in="dots"></feMergeNode>
								<feMergeNode in="offset-shadow"></feMergeNode>
								<feMergeNode in="outline"></feMergeNode>
								<feMergeNode in="stroke-offset"></feMergeNode>
								<feMergeNode in="SourceGraphic"></feMergeNode>
								<feMergeNode in="extrude"></feMergeNode>
							</feMerge>
						</filter>
					</defs>
					<g filter="url(#editing-incredible)">
						<g transform="translate(90.79438596963882, 100.9000015258789)">
							<path
								d="M15.68 0L0.42 0L9.31-46.20L24.71-46.20L15.68 0ZM55.86 1.40L55.86 1.40L55.86 1.40Q47.39 1.40 47.39-5.18L47.39-5.18L47.39-5.18Q47.46-7.00 48.02-10.08L48.02-10.08L49.28-16.52L49.28-16.52Q51.17-25.62 51.17-27.65L51.17-27.65L51.17-27.65Q51.17-31.71 48.79-31.71L48.79-31.71L48.79-31.71Q44.80-31.71 42.70-21.28L42.70-21.28L38.57 0L24.50 1.40L31.78-35.77L43.26-37.10L42.14-30.24L42.14-30.24Q45.43-37.10 55.51-37.10L55.51-37.10L55.51-37.10Q60.41-37.10 62.48-35.04L62.48-35.04L62.48-35.04Q64.54-32.97 64.54-28.35L64.54-28.35L64.54-28.35Q64.54-24.01 62.30-13.86L62.30-13.86L62.30-13.86Q61.25-9.31 61.25-7.60L61.25-7.60L61.25-7.60Q61.25-5.88 62.20-4.90L62.20-4.90L62.20-4.90Q63.14-3.92 64.54-3.78L64.54-3.78L64.54-3.78Q63.84-1.40 61.43 0L61.43 0L61.43 0Q59.01 1.40 55.86 1.40ZM97.44-40.60L97.44-40.60L97.44-40.60Q98.42-42.28 98.42-44.10L98.42-44.10L98.42-44.10Q98.42-47.32 96.46-47.32L96.46-47.32L96.46-47.32Q93.45-47.32 92.19-41.16L92.19-41.16L91.14-35.70L97.51-35.70L97.09-32.55L90.51-32.55L84.21 0L70.07 1.40L76.79-32.55L71.82-32.55L72.45-35.70L77.35-35.70L78.82-41.23L78.82-41.23Q80.08-46.34 85.47-48.72L85.47-48.72L85.47-48.72Q89.39-50.40 95.97-50.40L95.97-50.40L95.97-50.40Q102.55-50.40 105.49-48.72L105.49-48.72L105.49-48.72Q108.43-47.04 108.43-44.80L108.43-44.80L108.43-44.80Q108.43-42.56 106.68-41.16L106.68-41.16L106.68-41.16Q104.93-39.76 102.97-39.76L102.97-39.76L102.97-39.76Q99.12-39.76 97.44-40.60ZM111.58 1.40L111.58 1.40L111.58 1.40Q96.18 1.40 96.18-13.09L96.18-13.09L96.18-13.09Q96.18-23.38 101.85-30.03L101.85-30.03L101.85-30.03Q107.87-37.10 118.30-37.10L118.30-37.10L118.30-37.10Q125.86-37.10 129.71-33.60L129.71-33.60L129.71-33.60Q133.56-30.10 133.56-22.75L133.56-22.75L133.56-22.75Q133.56-11.55 127.54-5.04L127.54-5.04L127.54-5.04Q121.66 1.40 111.58 1.40ZM113.40-29.05L113.40-29.05L113.40-29.05Q112.56-27.16 111.90-24.33L111.90-24.33L111.90-24.33Q111.23-21.49 110.39-17.01L110.39-17.01L110.39-17.01Q109.55-12.53 109.55-7.00L109.55-7.00L109.55-7.00Q109.55-5.18 110.15-3.99L110.15-3.99L110.15-3.99Q110.74-2.80 112.35-2.80L112.35-2.80L112.35-2.80Q113.96-2.80 114.98-3.57L114.98-3.57L114.98-3.57Q115.99-4.34 116.76-6.16L116.76-6.16L116.76-6.16Q118.16-9.38 119.28-15.37L119.28-15.37L119.28-15.37Q120.40-21.35 120.51-23.94L120.51-23.94L120.51-23.94Q120.61-26.53 120.61-28.46L120.61-28.46L120.61-28.46Q120.61-30.38 120.05-31.64L120.05-31.64L120.05-31.64Q119.49-32.90 117.92-32.90L117.92-32.90L117.92-32.90Q116.34-32.90 115.29-31.92L115.29-31.92L115.29-31.92Q114.24-30.94 113.40-29.05ZM159.60-19.67L159.60-19.67L159.60-19.67Q162.12-24.15 162.12-28.70L162.12-28.70L162.12-28.70Q162.12-31.71 159.95-31.71L159.95-31.71L159.95-31.71Q158.27-31.71 156.52-28.84L156.52-28.84L156.52-28.84Q154.70-25.97 154.14-22.26L154.14-22.26L150.50 0L136.01 1.40L143.15-35.70L154.70-37.10L153.44-30.03L153.44-30.03Q156.87-37.10 164.57-37.10L164.57-37.10L164.57-37.10Q168.63-37.10 170.84-35L170.84-35L170.84-35Q173.04-32.90 173.04-28.60L173.04-28.60L173.04-28.60Q173.04-24.29 170.21-21.56L170.21-21.56L170.21-21.56Q167.37-18.83 162.54-18.83L162.54-18.83L162.54-18.83Q160.44-18.83 159.60-19.67ZM224.56 1.40L224.56 1.40L224.56 1.40Q216.09 1.40 216.09-5.18L216.09-5.18L216.09-5.18Q216.09-8.05 217.32-13.62L217.32-13.62L217.32-13.62Q218.54-19.18 218.96-21.42L218.96-21.42L218.96-21.42Q219.94-26.53 219.94-28.14L219.94-28.14L219.94-28.14Q219.94-31.71 217.28-31.71L217.28-31.71L217.28-31.71Q215.53-31.71 213.85-29.30L213.85-29.30L213.85-29.30Q212.17-26.88 211.40-22.05L211.40-22.05L207.06 0L193.41 1.40L197.19-17.64L197.19-17.64Q197.82-20.79 198.38-24.36L198.38-24.36L198.38-24.36Q198.94-27.93 198.94-28.49L198.94-28.49L198.94-28.49Q198.94-31.71 196.56-31.71L196.56-31.71L196.56-31.71Q194.95-31.71 193.20-29.33L193.20-29.33L193.20-29.33Q191.45-26.95 190.47-22.05L190.47-22.05L186.20 0L172.41 1.40L179.76-35.70L191.17-37.10L189.98-30.03L189.98-30.03Q191.80-33.81 195.16-35.46L195.16-35.46L195.16-35.46Q198.52-37.10 203.77-37.10L203.77-37.10L203.77-37.10Q206.78-37.10 208.74-35.63L208.74-35.63L208.74-35.63Q210.70-34.16 211.33-31.78L211.33-31.78L211.33-31.78Q212.52-34.23 215.57-35.67L215.57-35.67L215.57-35.67Q218.61-37.10 222.36-37.10L222.36-37.10L222.36-37.10Q226.10-37.10 227.96-36.30L227.96-36.30L227.96-36.30Q229.81-35.49 230.93-34.16L230.93-34.16L230.93-34.16Q232.82-31.71 232.82-27.23L232.82-27.23L232.82-27.23Q232.82-22.82 230.93-13.65L230.93-13.65L230.93-13.65Q229.95-9.17 229.95-7.53L229.95-7.53L229.95-7.53Q229.95-5.88 230.90-4.90L230.90-4.90L230.90-4.90Q231.84-3.92 233.24-3.78L233.24-3.78L233.24-3.78Q232.54-1.40 230.13 0L230.13 0L230.13 0Q227.71 1.40 224.56 1.40ZM266.98-11.83L266.98-11.83L266.98-11.83Q268.73-10.64 268.73-8.02L268.73-8.02L268.73-8.02Q268.73-5.39 267.40-3.71L267.40-3.71L267.40-3.71Q266.07-2.03 263.90-0.91L263.90-0.91L263.90-0.91Q259.42 1.40 254.59 1.40L254.59 1.40L254.59 1.40Q249.76 1.40 246.93 0.35L246.93 0.35L246.93 0.35Q244.09-0.70 242.20-2.66L242.20-2.66L242.20-2.66Q238.49-6.37 238.49-13.16L238.49-13.16L238.49-13.16Q238.49-23.73 244.23-30.17L244.23-30.17L244.23-30.17Q250.39-37.10 261.10-37.10L261.10-37.10L261.10-37.10Q267.75-37.10 271.04-34.30L271.04-34.30L271.04-34.30Q273.49-32.20 273.49-28.77L273.49-28.77L273.49-28.77Q273.49-16.45 252.21-16.45L252.21-16.45L252.21-16.45Q251.93-14.63 251.93-13.09L251.93-13.09L251.93-13.09Q251.93-9.87 253.37-8.65L253.37-8.65L253.37-8.65Q254.80-7.42 257.46-7.42L257.46-7.42L257.46-7.42Q260.12-7.42 262.96-8.65L262.96-8.65L262.96-8.65Q265.79-9.87 266.98-11.83ZM252.70-19.46L252.70-19.46L252.70-19.46Q257.67-19.46 260.54-22.54L260.54-22.54L260.54-22.54Q263.41-25.48 263.41-30.17L263.41-30.17L263.41-30.17Q263.41-31.78 262.82-32.66L262.82-32.66L262.82-32.66Q262.22-33.53 261.03-33.53L261.03-33.53L261.03-33.53Q259.84-33.53 258.83-33.08L258.83-33.08L258.83-33.08Q257.81-32.62 256.76-31.08L256.76-31.08L256.76-31.08Q254.17-27.58 252.70-19.46ZM297.92-37.10L297.92-37.10L297.92-37.10Q300.44-37.10 302.40-36.54L302.40-36.54L302.40-36.54Q302.47-36.82 302.61-37.59L302.61-37.59L302.96-39.76L302.96-39.76Q303.24-41.16 303.66-43.47L303.66-43.47L304.78-49.00L318.71-50.40L310.94-9.80L310.94-9.80Q310.87-9.38 310.87-8.68L310.87-8.68L310.87-7.56L310.87-7.56Q310.87-6.02 311.64-4.87L311.64-4.87L311.64-4.87Q312.41-3.71 313.67-3.71L313.67-3.71L313.67-3.71Q312.27-0.42 308.00 0.98L308.00 0.98L308.00 0.98Q306.53 1.40 304.47 1.40L304.47 1.40L304.47 1.40Q302.40 1.40 300.51 0.32L300.51 0.32L300.51 0.32Q298.62-0.77 298.06-2.59L298.06-2.59L298.06-2.59Q296.94-0.77 294.70 0.32L294.70 0.32L294.70 0.32Q292.46 1.40 289.21 1.40L289.21 1.40L289.21 1.40Q285.95 1.40 283.26 0.56L283.26 0.56L283.26 0.56Q280.56-0.28 278.88-2.10L278.88-2.10L278.88-2.10Q275.80-5.67 275.80-13.79L275.80-13.79L275.80-13.79Q275.80-24.29 281.96-30.66L281.96-30.66L281.96-30.66Q288.12-37.10 297.92-37.10ZM297.43-32.90L297.43-32.90L297.43-32.90Q294.84-32.90 293.44-30.10L293.44-30.10L293.44-30.10Q292.04-27.30 290.61-20.37L290.61-20.37L290.61-20.37Q289.17-13.44 289.17-7.21L289.17-7.21L289.17-7.21Q289.17-2.94 291.69-2.94L291.69-2.94L291.69-2.94Q293.93-2.94 295.51-5.18L295.51-5.18L295.51-5.18Q297.08-7.42 297.71-11.13L297.71-11.13L301.49-31.64L301.49-31.64Q300.02-32.90 297.43-32.90Z"
								fill="url(#editing-incredible-gradient)"
							></path>
						</g>
					</g>
				</svg>
			</v-toolbar-title>
			<v-spacer></v-spacer>

			<div class="search-input-container">
				<v-text-field prepend-icon="mdi-magnify"></v-text-field>
			</div>
			<v-spacer></v-spacer>

			<div class="admin-panel" v-if="user.isAdmin">
				<v-btn icon>
					<v-icon>mdi-lan-pending</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon>mdi-comment-remove</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon>mdi-comment-eye</v-icon>
				</v-btn>
			</div>

			<v-btn icon @click="openFavorites">
				<v-icon>mdi-history</v-icon>
			</v-btn>
			<v-btn icon @click="handleDialog">
				<v-icon>mdi-account</v-icon>
			</v-btn>

			<login :dialog="state.dialog" @changeDialog="handleDialog" />
		</v-app-bar>
	</div>
</template>

<script>
import { computed, reactive } from "@vue/composition-api";

import router from "@/router";
import Login from "../components/login/Login.vue";
export default {
	components: { Login },
	setup(props, context) {
		const store = context.root.$store;

		const state = reactive({
			dialog: false,
		});

		const handleDialog = () => {
			state.dialog = !state.dialog;
		};

		const user = computed(() => store.getters["GET_USER"]);

		return {
			openLogin: () => {
				//TODO
			},
			openFavorites: () => {
				router.push("/history/reviews");
			},
			goHome: () => {
				router.push("/");
			},
			state,
			handleDialog,
			user,
		};
	},
};
</script>

<style scoped lang="scss">
#product-counter {
	border-radius: 50%;
	width: 17px;
	color: white;
	position: absolute;
	background-color: red;
	top: -3px;
	left: 20px;
}

#toolbar-title {
	cursor: pointer;
}

.search-input-container {
	width: 400px;
	margin-right: 100px;
	::v-deep .v-input {
		max-width: 450px;
		border-radius: 8px !important;
		border-top-left-radius: 8px !important;
		border-top-right-radius: 8px !important;
		border-bottom-right-radius: 8px !important;
		border-bottom-left-radius: 8px !important;
		background-color: #c6d8ff !important;
		border-color: #c6d8ff !important;
	}

	::v-deep .v-text-field__details {
		display: none;
	}

	::v-deep .v-input__prepend-outer {
		padding-top: 5px;
		padding-left: 5px;
	}

	::v-deep .v-input__control {
		padding-right: 10px;
	}

	::v-deep .v-input__control > .v-input__slot:before {
		border: 0;
	}
}
</style>
