import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SERVICES } from './services';

import { LAYOUT_DECLARATIONS } from './views/_layout';
import { HomeComponent } from './views/home/home.component';
import { AddUrlComponent } from './views/addUrl/add-url.component';
import { BrokenUrlComponent } from './views/brokenUrl/broken-url.component';
import { SHARED_DECLARATIONS } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ...LAYOUT_DECLARATIONS,
    ...SHARED_DECLARATIONS,
    HomeComponent,
    AddUrlComponent,
    BrokenUrlComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [...SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
