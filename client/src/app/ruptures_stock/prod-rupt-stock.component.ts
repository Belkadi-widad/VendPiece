import { Component, OnInit } from '@angular/core';
import { Piece } from '../Piece';
import { ProduitService } from '../produit.service';
import { DataSource } from '@angular/cdk/collections';

 
@Component({
  selector: 'rupture-piece',
  templateUrl: './prod-rupt-stock.component.html',
  styleUrls: ['./prod-rupt-stock.component.css']
})
 
export class RupturePieceComponent  //implements OnInit 
{
 
 pieces: Piece[];
 

  constructor(private ProduitService: ProduitService) {}
 dataSource = new ProduitDataSource(this.ProduitService);
 displayedColumns = ['IdPiece', 'DesignP', 'Prix_p'];

 /* ngOnInit(): void {
     this.getPiecesRS();
  }

  getPiecesRS() {
    return this.ProduitService.getPiecesRS()
               .subscribe(
                 pieces => {
                  console.log(pieces);
                  this.pieces = pieces
                 }
                );
 }*/
}

export class ProduitDataSource extends DataSource<any> {
  constructor(private api: ProduitService) {
    super()
  }

  connect() {
    return this.api.getPiecesRS();
  }

  disconnect() {

  }
}