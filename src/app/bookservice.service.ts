import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface myBook{
  [x: string]: any;
  id: number;
  bookName: string;
  bookType: string;
  author: string;
  printYear: number;
  numberofPages: number;
  image: string;
  publisher: string;
  description: string;
  price:number; 
}

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  [x: string]: any;


  constructor() { }

   books: myBook[]=[
    {id:1, bookName:"Book-1", bookType:"Academic Research",author:"John Wick",publisher:"Abc Coorp",printYear:1990,numberofPages:555,image:"https://img.kitapyurdu.com/v1/getImage/fn:11209832/wi:550",description:"Science",price: 50 },
    {id:2, bookName:"Book-2", bookType:"Academic Research",author:"John Wick",publisher:"Abc Coorp",printYear:1989,numberofPages:555,image:"https://img.kitapyurdu.com/v1/getImage/fn:11421625/wi:500",description:"Science",price: 50 },
    {id:3, bookName:"Book-3", bookType:"Academic Research",author:"John Wick",publisher:"Abc Coorp",printYear:1989,numberofPages:555,image:"https://img.kitapyurdu.com/v1/getImage/fn:11227445/wi:500",description:"Science",price: 50 },
    {id:4, bookName:"Book-4", bookType:"Academic Research",author:"John Wick",publisher:"Abc Coorp",printYear:1989,numberofPages:555,image:"https://img.kitapyurdu.com/v1/getImage/fn:11435865/wi:550",description:"Science",price: 50 },
    {id:5, bookName:"Book-5", bookType:"Academic Research",author:"John Wick",publisher:"Abc Coorp",printYear:1989,numberofPages:555,image:"https://img.kitapyurdu.com/v1/getImage/fn:11439407/wi:500",description:"Science",price: 50 },
    {id:6, bookName:"Book-6", bookType:"Academic Research",author:"John Wick",publisher:"Abc Coorp",printYear:1989,numberofPages:555,image:"https://img.kitapyurdu.com/v1/getImage/fn:10403687/wi:500",description:"Science",price: 50 },
    {id:7, bookName:"Book-7", bookType:"Academic Research",author:"John Wick",publisher:"Abc Coorp",printYear:1989,numberofPages:555,image:"https://img.kitapyurdu.com/v1/getImage/fn:8817766/wi:500",description:"Science",price: 50 },
    {id:8, bookName:"Book-8", bookType:"Academic Research",author:"John Wick",publisher:"Abc Coorp",printYear:1989,numberofPages:555,image:"https://img.kitapyurdu.com/v1/getImage/fn:11258264/wh:true/miw:200/mih:200",description:"Science",price: 50 }
  ]




}
