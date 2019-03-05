import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { IUrl } from '../../models';
import { UrlService } from '../../services';
import { isUrlValidRegex,isUrlValid } from '../../helpers/util'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {
  @Input() showBroken = false;
  items: IUrl[];
  loading = false;

  constructor(private urlService: UrlService) {
  }

  ngOnInit() {
    this.getItems();
  }

  remove(url: IUrl) {
    const result = this.urlService.removeUrl(url);
    this.getItems(result);
  }

  open(url: IUrl) {
    window.open(url.url, '_blank');
    const result = this.urlService.updateUrl(url);
    this.getItems(result);
  }

  async testItems() {
    this.loading = true;
    const urls = this.urlService.getUrls() || [];
    const all = urls.map(i => this.checkIsValid(i));
    const combine = Promise.all(all);
    await combine;
    this.getItems();
    this.loading = false;
  }

  private async checkIsValid(url: IUrl) {
    url.isBroken = !isUrlValid(url.url);
    url.updateDate = new Date();
    return this.urlService.updateUrl(url);
  }

  private getItems(items?: IUrl[]) {
    let urls = items ? items : (this.urlService.getUrls() || []);
    if (this.showBroken) {
      urls = urls.filter(x => x.isBroken === true);
    }
    this.items = _.orderBy(urls, 'updateDate', 'desc');
  }

}

