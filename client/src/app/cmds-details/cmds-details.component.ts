import { Component, OnInit } from '@angular/core';
import { Commande } from '../Commande';
import { CommandeService } from '../commande.service';
 
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-commande-details',
  templateUrl: './cmds-details.component.html',
  styleUrls: ['./cmds-details.component.css']
})
export class CommandeDetailsComponent implements OnInit {
 
  commande = new Commande() ;
  submitted = false;
  message: string;
 
  constructor(
    private commandeService: CommandeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('IdComd');
    console.log(id);
    this.commandeService.getCommande(id)
      .subscribe(piece => this.commande = piece);
  }
 
  update(): void {
    this.submitted = true;
    this.commandeService.updateCommande(this.commande)
        .subscribe(() => this.message = "Commande modifiée !");
  }
 
  delete(): void {
    this.submitted = true;
    this.commandeService.deleteCommande(this.commande.IdComd)
        .subscribe(()=> this.message = "Commande supprimée !");
  }
 
  goBack(): void {
    this.location.back();
  }
}