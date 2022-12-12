import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//import { CartService } from '../cart.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
  
})
export class Component1Component implements OnInit {
  items: any;
  checkoutForm;
  cartService: any;

  constructor(
    //private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: any) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}