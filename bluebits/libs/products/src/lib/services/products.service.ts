/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public baseUrl = 'http://localhost:3000/api/v1/products';

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  getProduct(productId:string):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${productId }`)
  }

  createProduct(productData: FormData):Observable<Product>{
    return this.http.post<Product>(this.baseUrl,productData);
  }

  //
  updateProduct(productData: FormData,productid:string):Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/${productid }`,productData);
  }

  deleteCategory(categoryId:string):Observable<Object>{
    return this.http.delete<Object>(`${this.baseUrl}/${categoryId}`);
  }

  // getProductsCount():Observable<number>{
  //   return this.http.get<number>(`${this.baseUrl}/get/count`).pipe(map((objectValue:any)=>objectValue.productCount))
  // }

   getFeaturedProducts(count:number):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/get/featured/${count}`)
  }
}
