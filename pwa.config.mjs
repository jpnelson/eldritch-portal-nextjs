import pkg from "./package.json" assert { type: "json" };

const config = {
	key: "pwa-template",
	version: pkg.version,
	path: "/pwa/",
	appName: "Eldritch Portal",
	appShortName: "EP",
	appTitle: "Eldritch Portal",
	appDescription: "DM external desplay for use with Eldritch Tabeltop (or any external screen)",
	developerName: "Joshua Nelson",
	developerURL: "https://github.com/jpnelson",
	dir: "auto",
	lang: "en",
	background: "#121212",
	theme_color: "#0097A7",
	appleStatusBarStyle: "black",
	display: "standalone",
	orientation: "landscape",
	scope: "/",
	start_url: "/",
	pixel_art: false,
	loadManifestWithCredentials: false,
	manifestMaskable: true,
	preferRelatedApplications: false,
	relatedApplications: undefined,
	icons: {
		// Platform Options:
		// - offset - offset in percentage
		// - background:
		//   * false - use default
		//   * true - force use default, e.g. set background for Android icons
		//   * color - set background for the specified icons
		//
		android: true,
		appleIcon: true,
		appleStartup: true,
		favicons: true,
		windows: false,
		yandex: false,
	},
	shortcuts: [],
};

export default config;
