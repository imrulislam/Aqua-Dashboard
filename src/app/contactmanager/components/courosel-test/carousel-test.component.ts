import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';


@Component({
  selector: 'app-carousel-test',
  templateUrl: './carousel-test.component.html',
  styleUrls: ['./carousel-test.component.scss']
})
export class CarouselTestComponent implements OnInit {
  public carouselOne: NguCarousel;

  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true
    };
  }

}
