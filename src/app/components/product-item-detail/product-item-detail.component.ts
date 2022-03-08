import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../Product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product: Product;
  prodId: number = 0;
  quantity: number = 1;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    };

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((parameters: { get: (arg0: string) => any; }) => {
      this.prodId = Number(parameters.get('id'));
      
    });

    this.productService.getProducts()
      .subscribe((products: Product[]) => {
        this.product = products.filter(({ id }) => id === this.prodId)[0];
      });
  }

  addToCart(product: Product, quantity: number) {
    this.cartService.addToCart(product, quantity);
  };
}
