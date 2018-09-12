import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HelloworldComponent} from '../helloworld/helloworld.component'
import { NghomeComponent } from '../nghome/nghome.component';
import { GalleryComponent} from '../gallery/gallery.component'


const routes: Routes = [
 { path: 'hw', component: HelloworldComponent},
 { path: 'ng', component: NghomeComponent},
 { path: 'ga', component: GalleryComponent},
 { path: '',  component: DashboardComponent}
];

@NgModule ({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {}