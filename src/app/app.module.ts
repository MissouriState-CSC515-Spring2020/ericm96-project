import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { ImageRecentComponent } from './image-recent/image-recent.component';
import { TopBarComponent } from './top-bar/top-bar.component';
// import { ImageCategoryComponent } from './image-category/image-category.component';
// import { ImageDetailsComponent } from './image-details/image-details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // ImageRecentComponent,
    TopBarComponent,
    // ImageCategoryComponent,
    // ImageDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', 
        loadChildren: () =>  import('./image-recent/image-recent.module').then(m => m.ImageRecentModule)
        // component: ImageRecentComponent
      },
      {
        path: 'category', 
        loadChildren: () =>  import('./image-category/image-category.module').then(m => m.ImageCategoryModule)
        // component: ImageCategoryComponent 
      },
      {
        path: 'details', 
        // component: ImageDetailsComponent 
        loadChildren: () =>  import('./image-details/image-details.module').then(m => m.ImageDetailsModule)
      }
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
