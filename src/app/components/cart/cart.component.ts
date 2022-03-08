import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../Product';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  subtotal: number = 0;

  constructor(
    private cartService: CartService,
    ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.subtotal = this.cartService.getTotal();
  };

  onRemove(id: number):void {
    this.items = this.items.filter((prod)=> prod.id != id);
    this.cartService.removeFromCart(id);
    this.subtotal = this.cartService.getTotal();
  };

  
  
}
