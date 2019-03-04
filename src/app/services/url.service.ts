import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUrl } from '../models';
import { addUrl, getUrls } from '../helpers/utility';

@Injectable()
export class UrlService {
    constructor(private http: HttpClient) { }

    addUrl(url: IUrl): IUrl {
        return addUrl(url);
    }

    getUrls(): IUrl[] {
        return getUrls();
    }
}
