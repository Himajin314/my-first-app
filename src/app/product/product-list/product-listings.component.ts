import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products = products

  constructor() { }

  ngOnInit(): void {
  }

}
