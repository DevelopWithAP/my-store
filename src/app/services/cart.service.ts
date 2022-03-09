import { Injectable } from '@angular/core';
import { Product, CartItem } from '../../Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  getItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: Product, quantity: number) {
    const isInCart: CartItem | undefined = this.cartItems.find(({ id }) => id === product.id);

    if (isInCart) {
      const updateQuantity: CartItem = { ...isInCart, quantity: isInCart.quantity + quantity };
      this.cartItems.splice(this.cartItems.indexOf(isInCart), 1, updateQuantity);
    }
    else {
      this.cartItems.push({ ...product, quantity });
    }
    window.alert(`${product.name} x ${quantity} added to cart`);
  }

  removeFromCart(id: number): void {
    this.cartItems = this.cartItems.filter((prod) => prod.id != id);
  };

  getTotal(): number {
    let currentTotal: number = 0;
    for (let cartItem of this.getItems()) {
      currentTotal += cartItem.price * cartItem.quantity;
    }
    return currentTotal;
  };

  clearCart(): CartItem[]  {
    this.cartItems = [];
    return this.getItems();
  }

  constructor() { }
}
