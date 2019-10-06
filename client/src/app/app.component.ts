import { Component } from '@angular/core';
import {Chart} from 'chart.js';
import { AuthentificationService } from 'src/app/authenfication.service';
import { ProduitService } from './produit.service';
import{ClientService} from './client.service';
import{CommandeService} from './commande.service' ; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public cmd : CommandeService,public auth :AuthentificationService , public prod : ProduitService, public cl :ClientService){
  
  }
}
