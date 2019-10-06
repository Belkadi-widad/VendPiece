import { Component, OnInit } from '@angular/core';
import { Commande } from '../Commande';
import { LCService } from '../ligne-comd.service';
import { LC } from '../LC';
import { ActivatedRoute, Params } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';

 
@Component({
  selector: 'app-piece',
  templateUrl: './lignes-comds.component.html',
  styleUrls: ['./lignes-comds.component.css']
})
 
export class LCsComponent  //implements OnInit 
{
 
 cmds: LC[];
 
  constructor(private lcService: LCService,  private route: ActivatedRoute,
    ) {}
 
 dataSource = new LigneCommandeDataSource(this.lcService,this.route);
 displayedColumns = ['num_ar_com','num_p','qte_com' ,'qte_liv'];

  /*ngOnInit(): void {
     this.getCommandes();
  }*/

  getCommandes() {

    const idComd = +this.route.snapshot.paramMap.get('IdComd');
    console.log(idComd)
    return this.lcService.getLCommandes(idComd)
               .subscribe(
                 pieces => {
                  console.log(pieces);
                  this.cmds = pieces
                 }
                );
 }
}

export class LigneCommandeDataSource extends DataSource<any> {
  constructor(private api: LCService,private route: ActivatedRoute) {
    super()
  }
  

  connect() {
    const idComd = +this.route.snapshot.paramMap.get('IdComd');
    console.log(idComd)
    return this.api.getLCommandes(idComd)
  }

  disconnect() {

  }
}