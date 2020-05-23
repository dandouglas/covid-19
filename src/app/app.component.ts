import { Component } from '@angular/core';
import {} from 'googlemaps';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faBiohazard = faBiohazard;
}
