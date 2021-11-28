import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any=[]
  constructor(private productSrv: ProductsService) { }

  ngOnInit(): void {
    this.productSrv.getProducts()
    .subscribe(
      data=>{this.products=data;console.log(this.products);},
      error=>{console.log(error)}
    )
  }

}
