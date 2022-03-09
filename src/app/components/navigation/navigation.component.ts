import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/Product';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor() { }

  ngOnInit(): void {
  };

}
