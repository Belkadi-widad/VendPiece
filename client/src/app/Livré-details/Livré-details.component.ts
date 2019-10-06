import { Component, OnInit } from '@angular/core';
import { Livré } from '../Livré';
import {BonLiv} from '../BonLiv'
import { LivréService } from '../livré.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {MontantProd} from '../mantant-prod'; 
import {MontantProdService} from '../mantant-prod.service'
import {BonLivService}  from '../BonLiv.service' ; 
import { LC } from '../LC';
import { LCService } from '../ligne-comd.service';

@Component({
  selector: 'app-facture-details',
  templateUrl: './Livré-details.component.html',
  styleUrls: ['./Livré-details.component.css']
})
export class LivréDetailsComponent implements OnInit {
 
   bls : BonLiv[];
  submitted = false;
  message: string;
  li = new Livré();
  lcs: LC[];
  bl1 = new BonLiv(); 
  bl2 =new BonLiv();

  constructor(
    private bonlivService: BonLivService,
    private livréService: LivréService,
    private lcService : LCService,
    private route: ActivatedRoute,
    private location: Location, 
    private mantprodservice : MontantProdService,
  ) {}
 
  ngOnInit(): void {     

    this.getBLs();
   const id = +this.route.snapshot.paramMap.get('IdBL');
   const id2= +this.route.snapshot.paramMap.get('IdPiece');

this.livréService.getLivré(id,id2)
      .subscribe(piece => this.li= piece); 
      console.log(this.li)


/*
   this.bonlivService.getBL(id) 
    .subscribe(piece => this.bl2 = piece);
   
   const numar= this.bl2.NumArCom; 
   console.log("le numero d'  arrivé " + numar); 

    this.lcService.getLCommandesPNL(numar)
      .subscribe(
        pieces => {
         this.lcs = pieces
        }
       );; 
       */
  }

getPieces() {    
     
    this.bonlivService.getBL(this.li.num_bl) 
    .subscribe(piece => this.bl1 = piece);   
   let  numar=0;  

   numar= this.bl1.NumArCom; 
   console.log("le numero d'  arrivé " + this.bl1);  
  return this.lcService.getLCommandesPNL(numar)
             .subscribe(
               pieces => {
                this.lcs = pieces
               }
              );
}

 
  getBLs() {
    return this.bonlivService.getBLs()
               .subscribe(
                 pieces => {
                  this.bls = pieces
                 }
                );
 }

  update(): void {
    this.submitted = true;
    this.livréService.updateLivré(this.li)
        .subscribe(() => this.message = "Ligne de livraison modifiée !");
  }
 
  delete(): void {
    this.submitted = true;
    this.livréService.deleteLivré(this.li.num_bl,this.li.num_p)
        .subscribe(()=> this.message = "Ligne de livraison supprimée!");
  }
 
  goBack(): void {
    this.location.back();
  }

}