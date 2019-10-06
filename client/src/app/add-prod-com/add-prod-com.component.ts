import { Component, OnInit } from '@angular/core';
import { Commande } from '../Commande';
import { Piece } from '../Piece';
import { CommandeService } from '../commande.service';
import { Location } from '@angular/common';
import {LCService} from '../ligne-comd.service'; 
import{ LC} from '../LC'; 
import { ActivatedRoute, Params } from '@angular/router';
import { ProduitService } from '../produit.service';


@Component({
  selector: 'app-add-cmd',
  templateUrl: './add-prod-com.component.html',
  styleUrls: ['./add-prod-com.component.css']
})
 
export class AddLCComponent implements OnInit{
 
  lc = new LC();
  submitted = false;
  pieces: Piece[]; 
 
  constructor(
     private produitService: ProduitService,
    private route: ActivatedRoute,
    private lcService: LCService,
    private location: Location
  ) { }

 
  ngOnInit(): void {
    this.getPieces();
 }
 
 getPieces() {
  return this.produitService.getPieces()
             .subscribe(
               pieces => {
                this.pieces = pieces
               }
              );
}
  newLC(): void {
    this.submitted = false;
    this.lc = new LC();
  }
 
 addLCommande() {
   this.submitted = true;
   console.log("heeey2")
   this.save();
   
 }
 
 
  goBack(): void {
    this.location.back();
  }
 
  private save(): void {
    const idComd = +this.route.snapshot.paramMap.get('IdComd');
    this.lc.num_ar_com=idComd;
    this.lcService.addLCommande(this.lc)
        .subscribe();

  }
}