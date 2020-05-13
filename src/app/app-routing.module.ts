import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ImageRecentComponent } from './image-recent/image-recent.component';
import { ImageCategoryComponent } from './image-category/image-category.component';
import { ImageDetailsComponent } from './image-details/image-details.component';


const routes: Routes = [
  { 
    path: '', 
    loadChildren: () =>  import('./image-recent/image-recent.module').then(m => m.ImageRecentModule)
  },
  { path: 'category', component: ImageCategoryComponent },
  { path: 'details', component: ImageDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
