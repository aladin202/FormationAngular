import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servises/crud.service';
import Swal from 'sweetalert2';
import { Produit } from '../entites/produit.entity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
produit : Produit;
  constructor(private http:HttpClient, private route:Router, private crud:CrudService) { }

  ngOnInit() {
    this.getAll();
  }

getAll(){
  
  this.crud.getAllProduct().subscribe(res=>{
    this.produit = <Produit>res;
  })
}

  delete(produit){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.crud.deleteProductById(produit).subscribe(res=>{
  
          this.getAll();
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your data is safe :)',
          'error'
        )
      }
    })
  }

  gestion(produit){
    this.route.navigate(['/gestion',produit])
  }

}
