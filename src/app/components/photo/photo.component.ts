import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.sass']
})
export class PhotoComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
  }

  public openUrl(url: string) {
    window.open(url, '_blank');
  }

}
