import { Component, OnInit } from '@angular/core';
import { Commande } from '../Commande';
import { CommandeService } from '../commande.service';
import { Location } from '@angular/common';
import {ProduitService} from '../produit.service'; 
import { ClientService} from '../client.service'; 
import {Client} from '../Client'; 
@Component({
  selector: 'app-add-cmd',
  templateUrl: './add-cmd.component.html',
 styleUrls: ['./add-cmd.component.css']
})
 
export class AddCommandeComponent implements OnInit{
  
  commande = new Commande();
  submitted = false;
  clients: Client[];

  constructor(
    private commandeService: CommandeService,
    private location: Location,
    private clientservice : ClientService, 
  ) { }

  ngOnInit(): void {
    this.getClients();
 }

 getClients() {
   return this.clientservice.getClients()
              .subscribe(
                pieces => {
                 this.clients = pieces
                }
               );
}
  newCommande(): void {
    this.submitted = false;
    this.commande = new Commande();
  }
 
 addCommande() {
   this.submitted = true;
   console.log("heeey2")

   this.save();
 }
 
 
  goBack(): void {
    this.location.back();
  }
 
  private save(): void {
    this.commandeService.addCommande(this.commande)
        .subscribe();
  }
}