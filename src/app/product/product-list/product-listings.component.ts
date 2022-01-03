import { Component, OnInit } from '@angular/core';
// import { products } from '../product';
import { ProductService } from '../shared/product.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products:any

  constructor(private productService: ProductService) { }

    ngOnInit(): void {
      // this.products = this.productservice.getProducts()

      const productsObservable = this.productService.getProducts()

      productsObservable.subscribe(
        (data) => {
          this.products = data
        },
        (err) => { console.log('エラーが起きました' + err) },
        // () => { console.log('完了しました') }
      )
  }

}
