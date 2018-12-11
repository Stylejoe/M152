import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { NghomeComponent } from '../nghome/nghome.component';
import { GalleryComponent} from '../gallery/gallery.component';
import { MountainListComponent } from '../mountain/mountain-list/mountain-list.component';
import { MountainItemComponent } from '../mountain/mountain-item/mountain-item.component';

const routes: Routes = [
 { path: 'ng', component: NghomeComponent},
 { path: 'ga', component: MountainListComponent},
 { path: '',  component: DashboardComponent},
 { path: 'ga/:id', component: MountainListComponent}
];

@NgModule ({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {}