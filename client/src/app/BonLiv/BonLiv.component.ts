import { Component, OnInit } from '@angular/core';
import { BonLiv } from '../BonLiv';
import { BonLivService } from '../BonLiv.service';
import { DataSource } from '@angular/cdk/collections';

 
@Component({
  selector: 'app-bonliv',
  templateUrl: './BonLiv.component.html',
  styleUrls: ['./BonLiv.component.css']
})
 
export class BonLivComponent // implements OnInit 
{
 
 bonlivs: BonLiv[];
 
  constructor(private bonlivService: BonLivService) {}

 dataSource = new BLDataSource(this.bonlivService);
 displayedColumns = ['IdBL','DateBL','NomPrep' ,'Poids_Col','Nbr_colis','NumArCom'];

 /* ngOnInit(): void {
     this.getBLs();
  }*/

  getBLs() {
    return this.bonlivService.getBLs()
               .subscribe(
                 pieces => {
                  console.log(pieces);
                  this.bonlivs = pieces
                 }
                );
 }
}

export class BLDataSource extends DataSource<any> {
  constructor(private api: BonLivService) {
    super()
  }

  connect() {
    return this.api.getBLs()
  }

  disconnect() {

  }
}