import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackUpPage } from './back-up.page';

const routes: Routes = [
  {
    path: '',
    component: BackUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackUpPageRoutingModule {}
