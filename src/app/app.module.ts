import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { NghomeComponent } from './nghome/nghome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    NghomeComponent,
    DashboardComponent,
    GalleryComponent,
    GalleryCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
