import { Component, OnInit } from '@angular/core';
import { Piece } from '../Piece';
import { ProduitService } from '../produit.service';
 
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-piece-details',
  templateUrl: './piece-details.component.html',
  styleUrls: ['./piece-details.component.css']
})
export class PieceDetailsComponent implements OnInit {
 
  piece = new Piece() ;
  submitted = false;
  message: string;
 
  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('IdPiece');
    console.log(id);
    this.produitService.getPiece(id)
      .subscribe(piece => this.piece = piece);
  }
 
  update(): void {
    this.submitted = true;
    this.produitService.updatePiece(this.piece)
        .subscribe(() => this.message = "Produit modifé !");
  }
 
  delete(): void {
    this.submitted = true;
    this.produitService.deletePiece(this.piece.IdPiece)
        .subscribe(()=> this.message = "Produit supprimé !");
  }
 
  goBack(): void {
    this.location.back();
  }
}