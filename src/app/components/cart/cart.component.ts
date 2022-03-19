import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../Product';
import { CartService } from '../../services/cart.service';
import { Customer } from '../../../Customer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  subtotal: number = 0;
  customer: Customer;

  constructor(
    private cartService: CartService, private router: Router) {
      this.customer = {
        name: '',
        address: '',
        cardNumber: '', 
      };
    }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.subtotal = this.cartService.getTotal();
  };

  onRemove(id: number):void {
    this.items = this.items.filter((prod)=> prod.id != id);
    this.cartService.removeFromCart(id);
    this.subtotal = this.cartService.getTotal();
  };

  onSubmitOrder(customer: Customer): void {
    this.customer = customer;
    this.router.navigate([`confirmation/${this.subtotal}/${this.customer.cardNumber}/${this.customer.name}`]);
  };
  
}
