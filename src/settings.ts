import joplin from "api";
import { SettingItemType } from "api/types";
import {
    DIDA365_COOKIE,
} from "./common";

export namespace settings {
    const SECTION = 'FeatureSettings';

    export async function register() {
        await joplin.settings.registerSection(SECTION, {
            label: "Dida365",
            iconName: "fas fa-clock",
        });

        let PLUGIN_SETTINGS = {};

        PLUGIN_SETTINGS[DIDA365_COOKIE] = {
            value: '',
            public: true,
            section: SECTION,
            type: SettingItemType.String,
            label: 'Cookie for Dida365',
            description: "Visit Dida365 web app in your web browser, open development tools and copy your cookies (requires restart)",
        }

        await joplin.settings.registerSettings(PLUGIN_SETTINGS);
    }
}
