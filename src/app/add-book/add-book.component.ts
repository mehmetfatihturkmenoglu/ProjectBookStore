import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BookserviceService, myBook } from '../bookservice.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  [x: string]: any;

  book!: myBook;

  isDisplay: boolean=false;
  
  bookForm!: FormGroup;

 

  



  constructor(private matDialog: MatDialog,public dataService: BookserviceService) { }

  

  ngOnInit(): void {
    this.bookForm= new FormGroup({

      id: new FormControl(null,Validators.required),
      bookName: new FormControl(null,Validators.required),
      bookType: new FormControl(null,Validators.required),
      author: new FormControl(null,Validators.required),
      printYear: new FormControl(null,Validators.required),
      publisher: new FormControl(null,Validators.required),
      numberofPages: new FormControl(null, Validators.required),
      image: new FormControl(null, [Validators.required, Validators.pattern('((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)')]),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
  
    });
  }

  

  // add(){
  //   this.dataService.books.push(this.data);
  //   console.log(this.dataService.books)
  // }



// add(){

//   this.book = this.bookForm.getRawValue();

//   this.dataService.books.push(this.book)

// }


get()
{

  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = this.bookForm.getRawValue();
  this.matDialog.open(PopupComponent, dialogConfig);

  
  // console.log(dialogConfig.data)




}








}
