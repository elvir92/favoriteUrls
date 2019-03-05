import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';

import { IUrl } from '../models';
import { addUrl, removeUrl, updateUrl, getUrls } from '../helpers/local-storage';

@Injectable()
export class UrlService {
    constructor(private http: HttpClient) { }

    addUrl(url: IUrl): IUrl[] {
        // Set default values
        url.id = uuid(); // or get last id from list and increase it
        url.insertDate = new Date();
        url.updateDate = new Date();
        return addUrl(url);
    }

    getUrls(): IUrl[] {
        return getUrls();
    }

    removeUrl(url: IUrl) {
        return removeUrl(url);
    }

    updateUrl(url: IUrl) {
        url.updateDate = new Date();
        return updateUrl(url);
    }    

    // checkIfExist(url: string) {
    //     return this.http.get(url).subscribe(
    //         data => {
    //             console.log(data);
    //             return true;
    //         },
    //         err => {
    //             console.log(err);
    //             return false;
    //         }
    //     );
    // }
}
