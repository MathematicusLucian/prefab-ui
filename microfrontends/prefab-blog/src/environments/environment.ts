import { firebaseConfig } from "./firebase_config";
import { tinymceConfig } from "./tinymce_config";

export const ENV = {
	name: "DEV",
	production: false,
	firebase: firebaseConfig,
	MCE_KEY: tinymceConfig
};