import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

  constructor() { }

  filteredProducts :any= [];
  categorySet=new Set();
  checked : boolean = false


  isChecked(checked : boolean, key : string): any{
    this.checked = checked;
    console.log(checked)
   this.categorySet.clear()
    if(checked){
      this.filteredProducts = this.products.filter(item=> (item.stocked == checked) && (item.name.includes(key)) );
      console.log(this.filteredProducts)
    }
    else{
      this.filteredProducts = this.products.filter(item=> item.name.includes(key));
      console.log(this.filteredProducts)
    }
    if(this.filteredProducts.size != 0){
    this.filteredProducts.forEach((item:any) =>{
      this.categorySet.add(item["category"])
    })
  }
  }


  
}
