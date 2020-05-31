import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cv-stat-details',
  templateUrl: './stat-details.component.html',
  styleUrls: ['./stat-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatDetailsComponent {

  @Input()
  title: string;

  @Input()
  value: any;

  @Input()
  country?: string;

}
