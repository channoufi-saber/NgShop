import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Order } from 'libs/orders/src/lib/models/order';
import { OrdersService } from '@bluebits/orders';
import { ORDER_STATUS } from '../order.constants';
import { TagModule } from 'primeng/tag';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';




@Component({
  selector: 'admin-orders-list',
  templateUrl: './orders-list.component.html',
  styles: [
  ]
})
export class OrdersListComponent implements OnInit {
 orders: Order[] = [];
  orderStatus: any = ORDER_STATUS;
  constructor(
    private ordersService: OrdersService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._getOrders();
  }
  private _getOrders() {
    this.ordersService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }
  deleteOrder(orderId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this order?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.ordersService.deleteOrder(orderId).subscribe({
          next: () => {
            this._getOrders();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Order is deleted!',
            });
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Order is not deleted!',
            });
          },
        });
      },
      reject: () => {
        return;
      },
    });
  }
  showOrder(orderId: string) {
    this.router.navigateByUrl(`orders/${orderId}`);
  }
}

