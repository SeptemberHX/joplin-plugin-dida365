export const DIDA365_COOKIE = 'Dida365PluginCookie';


export const SOURCE_URL_PAPERS_PREFIX = 'papers_';

export const SOURCE_URL_DIDA_PREFIX = 'dida_';
export const DIDA_IGNORE_NOTE_TAG_NAME = 'Dida365Ignore';

export function extractInfo(data: string) {
    const splitResults = data.split(':');
    let info = {};
    for (const result of splitResults) {
        if (result.startsWith(SOURCE_URL_PAPERS_PREFIX)) {
            info[SOURCE_URL_PAPERS_PREFIX] = result.substr(SOURCE_URL_PAPERS_PREFIX.length);
        } else if (result.startsWith(SOURCE_URL_DIDA_PREFIX)) {
            info[SOURCE_URL_DIDA_PREFIX] = result.substr(SOURCE_URL_DIDA_PREFIX.length);
        }
    }
    return info;
}

export function updateInfo(raw, prefix, data) {
    let info = extractInfo(raw);
    info[prefix] = data;

    let newInfoStrs = [];
    for (let prefix in info) {
        newInfoStrs.push(`${prefix}${info[prefix]}`);
    }
    return newInfoStrs.join(':');
}