import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servises/crud.service';
import { Produit } from '../entites/produit.entity';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
  providers:[CrudService]
})
export class GestionComponent implements OnInit {
  id_product: any;
  produit : Produit = new Produit();
  constructor(private http:HttpClient, private route:Router, private activatedRout: ActivatedRoute, private crud:CrudService) {
    this.activatedRout.params.subscribe(params => this.id_product = params.id);
   }

  ngOnInit() {
    this.crud.getProductById(this.id_product).subscribe(res=>{
      this.produit = <Produit>res
    })
  }
  validateForm(){
    this.crud.createNewProduct(this.produit).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/'])
    },err=>{
      console.log(err);
    },()=>{
      console.log("Creation OK");
    })
    
  }

  updateForm(){
    this.crud.updateProductById(this.id_product,this.produit).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/'])
    },err=>{
      console.log(err);
    },()=>{
      console.log("Creation OK");
    })
  }
}
