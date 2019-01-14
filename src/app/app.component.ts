import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

import { Photo } from './components/photo/photo.model';
import { PaginatorConfig } from './components/paginator/paginator.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {

  public title = 'runpath-test-image-filter';
  public paginatorConfig: PaginatorConfig;
  public currentGallery: Array<Photo>;

  private endpoint = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.setPaginatorConfiguration();
    this.loadPage(1);
  }

  public loadPage(page: number) {
    this.appService.getData(this.endpoint)
      .subscribe((data: Array<Photo>) => {
        this.currentGallery = this.filterByPage(data, page);
    });
  }

  private setPaginatorConfiguration () {
    this.appService.getData(this.endpoint)
      .subscribe((data: Array<Photo>) => {
        this.paginatorConfig = {
          firstPage: 1,
          lastPage: this.findTotalPagesNumber(data)
        };
    });
  }

  private findTotalPagesNumber(array: Array<Photo>): number {
    return array[array.length - 1].albumId;
  }

  private filterByPage(array: Array<Photo>, page: number) {
    return array.filter(photo => photo.albumId === page);
  }

}

