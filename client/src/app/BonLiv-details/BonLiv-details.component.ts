import { Component, OnInit } from '@angular/core';
import { Commande } from '../Commande';
import { CommandeService } from '../commande.service';
 import{BonLiv} from '../BonLiv'
import {BonLivService} from '../BonLiv.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-commande-details',
  templateUrl: './BonLiv-details.component.html',
 styleUrls: ['./BonLiv-details.component.css']
})
export class BonLivDetailsComponent implements OnInit {
 
  bl = new BonLiv() ;
  commandes : Commande[];
  submitted = false;
  message: string;
 
  constructor(
    private bonlivService: BonLivService,
    private commandeService: CommandeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('IdBL');
    console.log(id);
    this.bonlivService.getBL(id)
      .subscribe(piece => this.bl = piece);    
      this.getCommandesNL();

  }
  getCommandesNL() {
    return this.commandeService.getCommandesNL()
               .subscribe(
                 pieces => {
                  this.commandes = pieces
                 }
                );
 }

  update(): void {
    this.submitted = true;
    this.bonlivService.updateBL(this.bl)
        .subscribe(() => this.message = "Bon de livraison modifié !");
  }
 
  delete(): void {
    this.submitted = true;
    this.bonlivService.deleteBL(this.bl.IdBL)
        .subscribe(()=> this.message = "Bon de livraison supprimé !");
  }
 
  goBack(): void {
    this.location.back();
  }
}