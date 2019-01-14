import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(photos: Array<Photo>, searchText: string): Array<Photo> {
        if (!photos) {
            return [];
        } else if (!searchText) {
            return photos;
        } else {
            searchText = searchText.toLowerCase();
            return photos.filter(it => {
                return it.title.toLowerCase().includes(searchText);
            });
        }
   }

}
