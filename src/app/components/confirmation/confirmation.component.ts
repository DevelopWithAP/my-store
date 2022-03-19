import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: string | null = '';
  cardNumber: string | null = '';
  total: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameters => {
      this.name = parameters.get('name');
      this.cardNumber = parameters.get('cardNumber');
      this.total = parameters.get('total');
    });
  };

}
