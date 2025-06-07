import { OrderItem } from "./order-item";
import { User } from '@bluebits/users';

export interface Order{
    id?:string;
    orderItems:OrderItem[];
    shippingAddress1?:string;
    shippingAddress2?:string;
    city?:string;
    zip?:string;
    country?:string;
    phone?:string;
    status?: 0 | 1 | 2 | 3 | 4;
    totalPrice?:string;
    user?:User;
    dateOrdered?:string;
}
