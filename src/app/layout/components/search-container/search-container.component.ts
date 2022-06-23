import { Component, OnInit ,Inject} from '@angular/core';
import { ProductSearchService } from '../../services/product-search.service';

@Component({
  selector: 'search-container-component',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  constructor(@Inject("ProductSearchService") public serchService : any) { }

  ngOnInit(): void {
  }

  isChecked:boolean =false
  key : string = ""

  onCheckChanged(){
    this.serchService.isChecked(this.isChecked,this.key)
  }

  

}
