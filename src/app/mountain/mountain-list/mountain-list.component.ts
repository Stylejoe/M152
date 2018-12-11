import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Berg } from '../mountain.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mountain-list',
  templateUrl: './mountain-list.component.html',
  styleUrls: ['./mountain-list.component.css']
})
export class MountainListComponent implements OnInit {

  mountains: Map<string, Berg>;
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {  
    //einlesen aller mountains aus environment
    this.DeserializeMountains();
  }

  private DeserializeMountains() {
    this.mountains = new Map<string, Berg>();
    const mntParam: string = this.route.snapshot.params['id'];
    const config = environment.mountains;

    config.features.forEach(mountain => {
      //contains all the informations
      const prop = mountain.properties;
      //creation of a mountain
      this.mountains.set
      (prop.id, new Berg
        (
          prop.id, 
          prop.name, 
          prop.el, 
          mountain.geometry.coordinates[0], // X 
          mountain.geometry.coordinates[1], // Y
          prop.img
        ));
    });

    //if an id parameter is given
    if(mntParam)
    {
      for(let mountain of config.features)
      {
        if(mountain.properties.id == mntParam)
        {
          this.mountains.clear();
          this.mountains.set(mountain.properties.id,new Berg
            (
              mountain.properties.id, 
              mountain.properties.name, 
              mountain.properties.el, 
              mountain.geometry.coordinates[0], // X 
              mountain.geometry.coordinates[1], // Y
              mountain.properties.img
            ));
        }
      }
    }
  }
}
