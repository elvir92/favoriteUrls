import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicLayoutComponent } from './views/_layout/public-layout.component';
import { HomeComponent } from './views/home/home.component';
import { AddUrlComponent } from './views/addUrl/add-url.component';
import { BrokenUrlComponent } from './views/brokenUrl/broken-url.component';

const routes: Routes = [  
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'prefix'
      },
      {
        path: 'add-url',
        component: AddUrlComponent,
      },
      {
        path: 'broken-url',
        component: BrokenUrlComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
