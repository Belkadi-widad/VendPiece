import { Component, OnInit } from '@angular/core';
import { Facture } from '../Facture';
import { RelanceService } from '../relance.service';
import { DataSource } from '@angular/cdk/collections';

 
 
@Component({
  selector: 'app-fact',
  templateUrl: './relance.component.html',
  styleUrls: ['./relance.component.css']
})
 
export class RelanceComponent // implements OnInit 
{

   constructor(private relanceService: RelanceService) {}
 facts: Facture[];
 dataSource = new FactureDataSource(this.relanceService);
 displayedColumns = ['idFact','dateEd','dateEch' ,'prix_tot'];
 

 
  /*ngOnInit(): void {
     this.getfacts();
  }
*/
  getfacts() {
    return this.relanceService.getFacts()
               .subscribe(
                 pieces => {
                  console.log(pieces);
                  this.facts = pieces
                 }
                );
 }
}


export class FactureDataSource extends DataSource<any> {
  constructor(private api: RelanceService) {
    super()
  }

  connect() {
    return this.api.getFacts()
  }

  disconnect() {

  }
}