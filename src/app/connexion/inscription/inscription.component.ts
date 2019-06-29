import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
  } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  myform:FormGroup;
  constructor(private route:Router) { }

  ngOnInit() {
    this.myform = new FormGroup(
      {name:new FormControl('',Validators.required),
       password:new FormControl('',[Validators.required,Validators.minLength(8)]),
       email:new FormControl('',[Validators.required,Validators.email])
    }
    )
  }
  singUp(){
    localStorage.setItem('user',JSON.stringify(this.myform.value))
    this.route.navigate(['/'])
  }
}
