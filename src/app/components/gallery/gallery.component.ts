import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../photo/photo.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  @Input() gallery: Array<Photo>;
  constructor() { }

  ngOnInit() {
  }

}
