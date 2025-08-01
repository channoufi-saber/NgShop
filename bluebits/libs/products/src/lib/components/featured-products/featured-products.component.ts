import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Subject } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-featured-products',
  templateUrl: './featured-products.component.html',
  styles: [
  ]
})
export class FeaturedProductsComponent implements OnInit, OnDestroy {

  featuredProducts:Product[]=[];
  endSubs$:Subject<any>=new Subject()
  constructor(private prodService:ProductsService) { }

  ngOnInit(): void {
    this._getFeaturedProducts()
  }

  private _getFeaturedProducts(){
    this.prodService.getFeaturedProducts(4).subscribe(products=>{
      this.featuredProducts=products
    })
  }
  ngOnDestroy(): void {

  }

}
