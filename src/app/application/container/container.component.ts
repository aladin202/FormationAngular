import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
imageUrl:string = "https://thumbs.dreamstime.com/img/thumbsetc/thumb-free-101011836.jpg";
buttonStatus:boolean = true;
count:number = 0;
message:string = "Her's your message";
firstLastName:string;
mail:string;
phone:string;
about:string;
HEROES = [
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'},
  {id: 5, name:'BatGirl'}
  ];

  form = [];
  
  date:Date = new Date();
  constructor() { console.log('constructor excution')}

  ngOnInit() {
    console.log('OnInit excution')
  }
  clickEvent(){
    alert ('owwwwch!!!');
  }
up(){
  this.count++;
}
down(){
  this.count--;
}
viewMessage(){
alert(this.message);
}
validate(){
  let message = {
    name:this.firstLastName,
    Email:this.mail,
    Phone:this.phone,
    About:this.about,

  }
  console.log(message);
  // alert(`Name = ${this.firstLastName} 
  //        Email = ${this.mail}
  //        Phone = ${this.phone}
  //        About = ${this.about}`)
}

validateForm(){
  let formule = {
    name:this.firstLastName,
      email:this.mail,
      phone:this.phone,
  }
  console.log(formule);
  this.form.push(formule);
}
}
