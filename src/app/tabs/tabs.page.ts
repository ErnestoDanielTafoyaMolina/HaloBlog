import { Component } from '@angular/core';
import{ServicesService} from '../services/services.service'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor( private HaloService:ServicesService) {}

}
