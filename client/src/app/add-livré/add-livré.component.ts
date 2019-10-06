import { Component, OnInit } from '@angular/core';
import { Piece } from '../Piece';
import { Location } from '@angular/common';
import {LivréService} from '../livré.service'; 
import{ Livré} from '../Livré'; 
import { ActivatedRoute, Params } from '@angular/router';
import { LCService } from '../ligne-comd.service';
import {BonLivService}  from '../BonLiv.service' ; 
import { BonLiv } from '../BonLiv';
import {FormControl} from '@angular/forms';
import { LC } from '../LC';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-add-cmd',
  templateUrl: './add-livré.component.html',
  styleUrls: ['./add-livré.component.css']
})
 
export class AddLivreComponent implements OnInit{

  li = new Livré();
  submitted = false; 
  disabled=true; 
  lcs: LC[];
  bls : BonLiv[]; 
  bl1 = new BonLiv(); 
 
  constructor(
     private produitService: LCService,
     private blService: BonLivService,
    private route: ActivatedRoute,
    private liService: LivréService,
    private location: Location
  ) { }

 
  ngOnInit(): void {
    
    this.getBLS();     
   // this.getPieces();

 }


getBLS(){
    return this.blService.getBLs()
    .subscribe(
      pieces => {
       this.bls = pieces
      }
     );   

}

getPieces() {    
     
    this.disabled=false; 
    this.blService.getBL(this.li.num_bl) 
    .subscribe(piece => this.bl1 = piece);
   const numar= this.bl1.NumArCom; 
   console.log("le numero d'  arrivé " + numar);  
  return this.produitService.getLCommandesPNL(numar)
             .subscribe(
               pieces => {
                this.lcs = pieces
               }
              );
}

  newLivre(): void {
    this.submitted = false;
    this.li = new Livré();
  }
 
 addLivre() {
   this.submitted = true;
   console.log("heeey2")
   this.save();
   
 }
 
 
  goBack(): void {
    this.location.back();
  }
 
  private save(): void {
    console.log(this.li.num_p)
   this.liService.addLivré(this.li)
        .subscribe();

  }
}

