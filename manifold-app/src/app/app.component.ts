import { Component } from '@angular/core';
import { AppstateService } from './services/appstate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public isCollapsed = false;
  public generalAvailableServices: {
    link: string;
    title: string;
    icon: string;
  }[] = [];

  constructor(private readonly appStateService: AppstateService) {
    this.initialize();
  }

  initialize() {
    this.generalAvailableServices =
      this.appStateService.generalAvailableServices;
  }
}
