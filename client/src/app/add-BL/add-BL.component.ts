import { Component, OnInit } from '@angular/core';
import { BonLiv } from '../BonLiv';
import { BonLivService } from '../BonLiv.service';
import { CommandeService } from '../commande.service';
import { Location } from '@angular/common';
import {ProduitService} from '../produit.service'; 
import { ClientService} from '../client.service'; 
import {Client} from '../Client'; 
import { Commande } from '../Commande';
@Component({
  selector: 'app-add-cmd',
  templateUrl: './add-BL.component.html',
  styleUrls: ['./add-BL.component.css']
})
 
export class AddBonLivComponent implements OnInit{
  
  bl = new BonLiv();
  submitted = false;
  commandes: Commande[];

  constructor(
    private commandeService: CommandeService,
    private location: Location,
    private bonlivservice : BonLivService, 
  ) { }

  ngOnInit(): void {
    
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
  newBonLiv(): void {
    this.submitted = false;
    this.bl = new BonLiv();
  }
 
 addBonLiv() {
   this.submitted = true;
   console.log("heeey2")

   this.save();
 }
 
 
  goBack(): void {
    this.location.back();
  }
 
  private save(): void {
    this.bonlivservice.addBL(this.bl)
        .subscribe();
  }
}