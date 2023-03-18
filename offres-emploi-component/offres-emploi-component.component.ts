import { Component, OnInit } from '@angular/core';
import {Emploi} from "../Core/model/emploi";
import {emploies} from "../Core/model/emploies";
import {product} from "../Core/model/products";

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  listemplois!:Emploi[];
  liste2!:Emploi[];

  rzlt!:string;
   ref!:string;
  constructor() { }

  ngOnInit(): void {
    this.listemplois= emploies;
    this.liste2= emploies;
    this.rzlt="";

  }
  calcult() {
    let x =0;
    for (let emploi of this.listemplois)
    {
      if( emploi.etat== true)
        x++;

    }

    this.rzlt=x.toString();
  }
  filterentr(){
    this.listemplois=this.liste2.filter((em)=>em.entreprise.includes(this.ref))
  }

}
