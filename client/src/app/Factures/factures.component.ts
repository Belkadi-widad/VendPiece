import { Component, OnInit } from '@angular/core';
import { Facture } from '../Facture';
import { FactureService } from '../facture.service';
import { DataSource } from '@angular/cdk/collections';

 
 
@Component({
  selector: 'app-fact',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
 
export class FactureComponent // implements OnInit 
{

   constructor(private factureService: FactureService) {}
 facts: Facture[];
 dataSource = new FactureDataSource(this.factureService);
 displayedColumns = ['idFact','dateEd','dateEch' ,'prix_tot'];
 

 
  /*ngOnInit(): void {
     this.getfacts();
  }
*/
  getfacts() {
    return this.factureService.getFacts()
               .subscribe(
                 pieces => {
                  console.log(pieces);
                  this.facts = pieces
                 }
                );
 }
}


export class FactureDataSource extends DataSource<any> {
  constructor(private api: FactureService) {
    super()
  }

  connect() {
    return this.api.getFacts()
  }

  disconnect() {

  }
}