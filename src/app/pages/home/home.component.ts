import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../../core/services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private servicePromotion: PromotionService) {

  }

  ngOnInit(): void {
    this.servicePromotion.list().subscribe(response => {
      console.log(response)
    })
  }
}
