import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statscard',
  templateUrl: './statscard.component.html',
  styleUrls: ['./statscard.component.css'],
})
export class StatscardComponent {
  @Input() public image!: string;
  @Input() public title!: string;
  @Input() public value!: string;
  @Input() public description!: string;
  @Input() stattype: 'warn' | 'normal' | 'info' = 'normal';

  public getDynamicClassConfig() {
    return {
      'text-black': this.stattype === 'normal',
      'text-secondary': this.stattype === 'info',
      'text-red-600': this.stattype === 'warn',
    };
  }
}
