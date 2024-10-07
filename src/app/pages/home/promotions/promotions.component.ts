import { Component, OnInit } from '@angular/core';
import { Promotion } from '../../../core/types/type';
import { PromotionService } from '../../../core/services/promotion.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit{
  
  promotions!: Promotion[];
  
  constructor(private service: PromotionService) {
  }

  ngOnInit(): void {
    this.service.list().subscribe(
      res => {
        this.promotions = res;
      }
    )
  }
}
