import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../../services/home-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cv-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  data$: Observable<any>;

  constructor(
    private homeApiService: HomeApiService,
  ) { }

  ngOnInit() {
    this.data$ = this.homeApiService.getWorldData();
  }

}
