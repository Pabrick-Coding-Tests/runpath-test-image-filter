import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginatorConfig } from './paginator.config';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass']
})
export class PaginatorComponent implements OnInit {

  @Input() config: PaginatorConfig;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangePage = new EventEmitter();
  public current: number;

  constructor() { }

  ngOnInit() {
    this.current = this.config.firstPage;
  }

  public nextPage() {
    if (this.current < this.config.lastPage) {
      this.current++;
      this.onChangePage.emit(this.current);
    }
  }

  public prevPage() {
    if (this.current > this.config.firstPage) {
      this.current--;
      this.onChangePage.emit(this.current);
    }
  }


}
