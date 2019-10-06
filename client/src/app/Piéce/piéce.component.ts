import { Component, OnInit } from '@angular/core';
import { Piece } from '../Piece';
import { ProduitService } from '../produit.service';
import { DataSource } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

 
@Component({
  selector: 'app-piece',
  templateUrl: './piéce.component.html',
  styleUrls: ['./piéce.component.css']
})
 
export class PieceComponent // implements OnInit
 {
 
 pieces: Piece[];
  constructor(private ProduitService: ProduitService) {}
  dataSource = new PieceDataSource(this.ProduitService);
  displayedColumns = ['IdPiece','DesignP','Poids' ,'Qte_p','Prix_p'];
  dataSource1 = new MatTableDataSource<Piece>();

 
 /* ngOnInit(): void {
     this.getPieces();
  }*/


  getPieces() {
    return this.ProduitService.getPieces()
               .subscribe(
                 pieces => {
                  console.log(pieces);
                  this.pieces = pieces
                 }
                );
 }

 applyFilter(filterValue: string) {

  this.dataSource1.filter = filterValue.trim().toLowerCase();
}

}

export class PieceDataSource extends DataSource<any> {
  constructor(private api: ProduitService) {
    super()
  }

  connect() {
    return this.api.getPieces(); 
  }  


  disconnect() {

  }
}