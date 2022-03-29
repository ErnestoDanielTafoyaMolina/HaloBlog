import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackUpPageRoutingModule } from './back-up-routing.module';

import { BackUpPage } from './back-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackUpPageRoutingModule
  ],
  declarations: [BackUpPage]
})
export class BackUpPageModule {}
