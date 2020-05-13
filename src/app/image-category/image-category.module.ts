import { NgModule } from "@angular/core";
import { ImageCategoryComponent } from './image-category.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ImageCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ImageCategoryComponent
      }
    ])
  ]
})
export class ImageCategoryModule {}