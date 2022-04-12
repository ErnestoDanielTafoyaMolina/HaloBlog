import { UserComponent } from './../user/user.component';
import { Component } from '@angular/core';
import {ServicesService} from '../services/services.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private HaloService : ServicesService) {

  }

}
