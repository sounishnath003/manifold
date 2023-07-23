import { Injectable } from '@angular/core';
import { GeneralAvailableServices } from '../constants/services';

@Injectable({
  providedIn: 'root',
})
export class AppstateService {
  public generalAvailableServices = GeneralAvailableServices;
  constructor() {}
}
