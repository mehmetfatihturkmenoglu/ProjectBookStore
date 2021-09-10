import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText!: string;

  mybooks;
  constructor(public dataService: BookserviceService) { 
    this.mybooks = dataService.books;
  }

  ngOnInit(): void {
  }

}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {




//   constructor() { }

//   ngOnInit(): void {
//   }

// }
