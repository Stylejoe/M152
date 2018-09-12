import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.css']
})
export class GalleryCardComponent implements OnInit {

  @Input() imgUrl: String;
  @Input() mountainName: String;
  @Input() mountainHeight: Number;

  constructor() { }

  ngOnInit() {
  }

}
