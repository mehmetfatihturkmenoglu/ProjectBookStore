import { Pipe, PipeTransform } from '@angular/core';
import { myBook } from './bookservice.service';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(books: myBook[], searchText: string): myBook[] {
    if(!books || ! searchText){
      return books;
    }

    return books.filter(book => book.bookName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
  }


