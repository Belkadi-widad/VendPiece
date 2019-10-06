import { Component, OnInit } from '@angular/core';
import { Piece } from '../Piece';
import { ProduitService } from '../produit.service';
 
 
@Component({
  selector: 'app-com-piece',
  templateUrl: './ListeProduits.component.html',
})
 
export class ListeProduitLcComponent  implements OnInit {
 
 pieces: Piece[];
 
  constructor(private ProduitService: ProduitService) {}
 
  ngOnInit(): void {
     this.getPieces();
  }

  getPieces() {
    return this.ProduitService.getPieces()
               .subscribe(
                 pieces => {
                  console.log(pieces);
                  this.pieces = pieces
                 }
                );
 }
}