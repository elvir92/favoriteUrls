import { IUrl } from '../models';
import { STORAGE_KEYS as KEY } from '../config/constants';

/* ====================================   Private methods =========================*/
const updateUrlStorage = (list: IUrl[]) => {
    localStorage.setItem(KEY.URLS, JSON.stringify(list));
};

/* ====================================   Public methods =========================*/

/** This function checking if received object is empty or not. */
// tslint:disable-next-line: max-line-length
export const isEmpty = (object: any): boolean => object && Object.keys(object).length === 0 || object === undefined || object === 'undefined';

/** This function gets all urls from local storage. */
export const getUrls = (): IUrl[] => {
    let urls: IUrl[];
    const result = localStorage.getItem(KEY.URLS);
    if (!isEmpty(result)) {
        try {
            urls = JSON.parse(result) as IUrl[];
        } catch (error) {
            // TODO: notification
            console.error(error);
        }
    }
    return urls || [];
};

/** Add newly created url object to the storage. */
export const addUrl = (url: IUrl): IUrl[] => {
    if (!isEmpty(url)) {
        const list = getUrls();
        list.push(url);
        updateUrlStorage(list);
        return list;
    }
    return [];
};


export const removeUrl = (url: IUrl) => {
    if (!isEmpty(url)) {
        const list = getUrls();
        const i = list.findIndex(x => x.id === url.id);
        if (i !== -1) {
            list.splice(i, 1);
        }
        updateUrlStorage(list);
        return list;
    }
    return [];
};

export const updateUrl = (url: IUrl) => {
    if (!isEmpty(url)) {
        const list = getUrls();
        const i = list.findIndex(x => x.id === url.id);
        if (i !== -1) {
            list[i] = url;
        }

        updateUrlStorage(list);
        return list;
    }
    return [];
};

