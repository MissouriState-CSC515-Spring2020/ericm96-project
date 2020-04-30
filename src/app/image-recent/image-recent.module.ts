import { NgModule } from "@angular/core";
import { ImageRecentComponent } from './image-recent.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ImageRecentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ImageRecentComponent
      }
    ])
  ]
})
export class ImageRecentModule {}