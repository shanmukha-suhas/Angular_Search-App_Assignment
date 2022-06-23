import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'product-category-row-component',
  templateUrl: './product-category-row.component.html',
  styleUrls: ['./product-category-row.component.css']
})
export class ProductCategoryRowComponent implements OnInit {

 

  constructor(@Inject("ProductSearchService")public productSearchService:any) {
   }

 

  ngOnInit(): void {
  }
  




}

