import { Component, OnInit,Inject } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  
  constructor(@Inject("ProductSearchService")public productSearchService:any) {
  
     }

  ngOnInit(): void {
  }

}
