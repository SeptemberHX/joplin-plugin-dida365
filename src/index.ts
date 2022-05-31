import joplin from 'api';
import {settings} from "./settings";
import {dida365_init} from "./lib/dida365/Dida365Init";
import {DIDA365_COOKIE} from "./common";

joplin.plugins.register({
	onStart: async function() {
		console.info('Hello world. Test plugin started!');

		await settings.register();

		if ((await joplin.settings.value(DIDA365_COOKIE)).length !== 0) {
			await dida365_init();
		}
	},
});
