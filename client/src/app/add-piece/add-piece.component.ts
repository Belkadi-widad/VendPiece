import { Component, OnInit } from '@angular/core';
import { Piece } from '../Piece';
import { ProduitService } from '../produit.service';
 
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-add-piece',
  templateUrl: './add-piece.component.html',
 styleUrls: ['./add-piece.component.css']
})
 
export class AddPieceComponent{
 
  piece = new Piece();
  submitted = false;
 
  constructor(
    private produitService: ProduitService,
    private location: Location
  ) { }
 
  newPiece(): void {
    this.submitted = false;
    this.piece = new Piece();
  }
 
 addPiece() {
   this.submitted = true;
   console.log("heeey2")

   this.save();
 }
 
  goBack(): void {
    this.location.back();
  }
 
  private save(): void {
    console.log(this.piece)
    this.produitService.addPiece(this.piece)
        .subscribe();
  }
  
}