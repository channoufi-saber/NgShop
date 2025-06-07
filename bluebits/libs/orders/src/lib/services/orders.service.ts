/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public baseUrl = 'http://localhost:3000/api/v1/orders';

  constructor(private http: HttpClient) { }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(this.baseUrl)
  }

  getOrder(orderId:string):Observable<Order>{
    return this.http.get<Order>(`${this.baseUrl}/${orderId }`)
  }

  createOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(this.baseUrl,order);
  }

  updateOrder(
    orderId: string,
    orderStatus: { status: string }
  ): Observable<Order> {
    return this.http.put<Order>(this.baseUrl + '/' + orderId, orderStatus);
  }

  deleteOrder(orderId:string):Observable<Object>{
    return this.http.delete<Object>(`${this.baseUrl}/${orderId}`);
  }
}
