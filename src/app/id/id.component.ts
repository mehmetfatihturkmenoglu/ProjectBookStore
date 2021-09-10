import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {

  selectedBook: any;
  constructor(private route: ActivatedRoute, private dataService:BookserviceService) { 
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.selectedBook = this.dataService.books.find(i => i.id === id);

    console.log(this.selectedBook)
  }

}
