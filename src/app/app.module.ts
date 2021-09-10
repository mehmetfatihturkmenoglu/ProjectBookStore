import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdComponent } from './id/id.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchPipe } from './search.pipe';
import { PopupComponent } from './popup/popup.component';
import {MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





const appRoutes: Routes = [

  {path:'', component: HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'details/:id', component:IdComponent},
  {path:'addpage', component:AddBookComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IdComponent,
    AddBookComponent,
    HomeComponent,
    SearchPipe,
    PopupComponent
   
    
    
 
  ],
  imports: [
    BrowserAnimationsModule,
    
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents:[MatDialogModule],
  bootstrap: [AppComponent]
})
export class AppModule { }



