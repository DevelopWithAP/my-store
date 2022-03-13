import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../../../Customer';
import { checkCard } from '../../../checkCard';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  form!: FormGroup;
  customer: Customer;
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
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(16)]),
    });
  };

  get name() {
    return this.form.get('name');
  };

  get address() {
    return this.form.get('address');
  };

  get cardNumber() {
    return this.form.get('cardNumber');
  };

  onSubmit(): void {
    this.registerCustomer.emit(this.customer);
  };
}
