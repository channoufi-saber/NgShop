import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductsService } from '@bluebits/products';

@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent  {

deleteProduct(arg0: any) {
throw new Error('Method not implemented.');
}
// eslint-disable-next-line @typescript-eslint/member-ordering
products:Product[]=[]
constructor(
  private productsService:ProductsService,
  private router:Router
) {}

ngOnInit(): void {
  this._getProducts()
}


private _getProducts(){
this.productsService.getProducts().subscribe(products =>{
  this.products=products  
})
}
  
updateProduct(productid:string){
    this.router.navigate(['/products/form/',productid])
  }

}
