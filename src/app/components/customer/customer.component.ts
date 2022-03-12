import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../../../Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  form!: FormGroup;
  customer: Customer;
  checkCard: boolean = true;
  checkName: boolean = true;

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
      cardNumber: new FormControl('', [Validators.required]),
    });
  };

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.registerCustomer.emit(this.customer);
  };

}
