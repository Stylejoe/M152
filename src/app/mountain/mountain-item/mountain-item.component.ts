import { Component, OnInit, Input } from '@angular/core';
import { Berg } from '../mountain.model';

@Component({
  selector: 'app-mountain-item',
  templateUrl: './mountain-item.component.html',
  styleUrls: ['./mountain-item.component.css']
})
export class MountainItemComponent implements OnInit {

  @Input() mountain: Berg;
  constructor() { }

  ngOnInit() {
  }

}
