import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageRecentComponent } from './image-recent/image-recent.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ImageCategoryComponent } from './image-category/image-category.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageRecentComponent,
    TopBarComponent,
    ImageCategoryComponent,
    ImageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
