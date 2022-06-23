import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './components/container/container.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductCategoryRowComponent } from './components/product-category-row/product-category-row.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ProductSearchService } from './services/product-search.service';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  providers: [{provide:"ProductSearchService",useClass:ProductSearchService}],
  declarations: [
    ContainerComponent,
    SearchContainerComponent,
    ProductTableComponent,
    ProductCategoryRowComponent,
    ProductRowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class LayoutModule { }
