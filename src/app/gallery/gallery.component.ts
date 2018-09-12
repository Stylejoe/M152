import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

   // Neues Property: Deklarieren Sie das passende Javascript-Objekt
 mountains: {imgUrl: String; name: String; altitude: Number;}[];

 // Initialisieren Sie den Array
  constructor() {

    this.mountains = [
      { imgUrl: "../assets/bilder/bristen.jpg", name: "Bristen", altitude: 3073 },
      { imgUrl: "../assets/bilder/eiger.jpg", name: "Eiger", altitude: 3970 },
      { imgUrl: "../assets/bilder/generoso.jpg", name: "Generoso", altitude: 1701 }
    ];
    
  }

  ngOnInit() {
  }

}