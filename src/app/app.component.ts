import { Component, OnInit } from '@angular/core';
import {IEmploye} from './interface'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements IEmploye ,OnInit{
  title = 'AngularProject';
  firstName =  "Aladin";    
    lastName = "Abdelwahed";
    bdate = new Date("11/22/1990");
    tel = 54044782 ;
    poste = "Devloppeur";
    adress = "Borj Baccouch";

    response :number;
  getAge(): number {
        
    let day = this.bdate.getFullYear();
    let today = new Date().getFullYear();
    return today - day;
  }
  ngOnInit(){
    this.response  = this.getAge()
  }
}
