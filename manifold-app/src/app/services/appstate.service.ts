import { Injectable } from '@angular/core';
import { GeneralAvailableServices } from '../constants/services';

@Injectable({
  providedIn: 'root',
})
export class AppstateService {
  private _generalAvailableServices = GeneralAvailableServices;

  get generalAvailableServices() {
    return this._generalAvailableServices;
  }

  constructor() {}
}
