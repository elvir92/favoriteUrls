import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LAYOUT_DECLARATIONS } from './views/_layout';
import { HomeComponent } from './views/home/home.component';
import { AddUrlComponent } from './views/addUrl/add-url.component';
import { BrokenUrlComponent } from './views/brokenUrl/broken-url.component';

@NgModule({
  declarations: [
    AppComponent,
    ...LAYOUT_DECLARATIONS,    
    HomeComponent,
    AddUrlComponent,
    BrokenUrlComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
