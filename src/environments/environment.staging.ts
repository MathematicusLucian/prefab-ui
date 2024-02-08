import { firebaseConfig } from "./firebase_config";
import { tinymceConfig } from "./tinymce_config";

export const ENV = {
	name: "STAGING",
	production: true,
	firebase: firebaseConfig,
	MCE_KEY: tinymceConfig
};
