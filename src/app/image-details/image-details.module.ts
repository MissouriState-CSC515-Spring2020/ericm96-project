import { NgModule } from "@angular/core";
import { ImageDetailsComponent } from './image-details.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ImageDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ImageDetailsComponent
      }
    ])
  ]
})
export class ImageDetailsModule {}