import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { NghomeComponent } from './nghome/nghome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { MountainListComponent } from './mountain/mountain-list/mountain-list.component';
import { MountainItemComponent } from './mountain/mountain-item/mountain-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NghomeComponent,
    DashboardComponent,
    GalleryComponent,
    GalleryCardComponent,
    MountainListComponent,
    MountainItemComponent
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
