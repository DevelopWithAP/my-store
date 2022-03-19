import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../../Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer;
  submitted: boolean = false;
  validCardLength: number = 16;

  @Output() registerCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor() {
    this.customer = {
      name: '',
      address: '',
      cardNumber: '',
    }
  }

  ngOnInit(): void {  
  };



  onSubmit(): void {
    this.submitted = true;
    this.registerCustomer.emit(this.customer);
  };
}
