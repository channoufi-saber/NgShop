import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from '@bluebits/orders';
import { OrdersService } from '@bluebits/orders';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { ORDER_STATUS } from '../order.constants';

@Component({
  selector: 'admin-orders-detail',
  templateUrl: './orders-detail.component.html',
  styles: [
  ]
})
export class OrdersDetailComponent implements OnInit {
  order!:Order  ;
  orderStatuses:any=[]
  currentOrderId='';
  selectedStatus:any
  constructor(private ordersService:OrdersService, private route:ActivatedRoute, private messageService:MessageService) { }

  ngOnInit(): void {
    this._mapOrderStatus()
    this._getOrder()
  }

  private _mapOrderStatus(){
    this.orderStatuses=Object.keys(ORDER_STATUS).map((key:any)=>{
      return {
        id:key,
        name:ORDER_STATUS[key].label
      }
    })
  }

  private _getOrder(){
    this.route.params.subscribe((params)=>{
      if (params['id']) {
        this.currentOrderId = params['id'];
        this.ordersService.getOrder(params['id']).subscribe((order)=>{
          this.order=order
          this.selectedStatus=order.status
          console.log(this.order)
        })
      }
    })
  }

getTotalPrice(orderItem: OrderItem): number {
  return Number(orderItem.product?.price) * (Number(orderItem.quantity))
}

onStatusChange(event:any){
  this.ordersService.updateOrder(this.currentOrderId,{status:event.value}).subscribe({
    next:()=>{
      this.messageService.add({
        severity:'success',summary:'Success',detail:'Order is updated'
      });timer(2000)
    },
    error:()=>{
      this.messageService.add({
        severity:'error',summary:'Error',detail:'Order is not updated'
      })
    }
  })
}
}
