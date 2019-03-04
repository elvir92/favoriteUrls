import { v4 as uuid } from 'uuid';
import { IUrl } from '../models';
import { CONSTANTS as _ } from '../config/constants';

/* ====================================   Private methods =========================*/
const updateUrlStorage = (list: IUrl[]) => {
    localStorage.setItem(_.URLS, JSON.stringify(list));
};

/* ====================================   Public methods =========================*/

/** This function checking if received object is empty or not. */
// tslint:disable-next-line: max-line-length
export const isEmpty = (object: any): boolean => object && Object.keys(object).length === 0 || object === undefined || object === 'undefined';

/** This function gets all urls from local storage. */
export const getUrls = (): IUrl[] => {
    let urls;
    const result = localStorage.getItem(_.URLS);
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
export const addUrl = (url: IUrl): IUrl => {
    if (!isEmpty(url)) {
        const list = getUrls();
        // Set default values
        url.id = uuid(); // or get last id from list and increase it
        url.insertDate = new Date();
        url.updateDate = new Date();
        list.push(url);
        updateUrlStorage(list);
        return url;
    }
    return url;
};


