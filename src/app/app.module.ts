import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LAYOUT_DECLARATIONS } from './views/_layout';
import { HomeComponent } from './views/home/home.component';
import { AddUrlComponent } from './views/addUrl/add-url.component';
import { BrokenUrlComponent } from './views/brokenUrl/broken-url.component';
import { SERVICES } from './services';
import { HttpClientModule } from '@angular/common/http';

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
