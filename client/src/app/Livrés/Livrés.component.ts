import { Component, OnInit } from '@angular/core';
import { Livré } from '../Livré';
import { LivréService } from '../livré.service';
import { LC } from '../LC';
import { ActivatedRoute, Params } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';

 
@Component({
  selector: 'app-Livré',
  templateUrl: './Livrés.component.html',
  styleUrls: ['./Livrés.component.css']
})
 
export class LivrésComponent  //implements OnInit 
{
 
 Livrés: Livré[];
 
  constructor(private lcService: LivréService,  private route: ActivatedRoute,
    ) {}
 
 dataSource = new LivréDataSource(this.lcService,this.route);
 displayedColumns = ['num_bl','num_p','qte_liv'];

  /*ngOnInit(): void {
     this.getCommandes();
  }

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
 }*/
}

export class LivréDataSource extends DataSource<any> {
  constructor(private api: LivréService,private route: ActivatedRoute) {
    super()
  }
  

  connect() {
    return this.api.getLivrés()
  }

  disconnect() {

  }
}