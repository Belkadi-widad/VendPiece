import { Component, OnInit } from '@angular/core';
import { Commande } from '../Commande';
import { CommandeService } from '../commande.service';
import { DataSource } from '@angular/cdk/collections';
import {Chart} from 'chart.js';

 
@Component({
  selector: 'app-piece',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
 
export class CommandeComponent  implements OnInit
 {
 
 cmds: Commande[];
 
  constructor(private commandeService: CommandeService) {}
  dataSource = new CommandeDataSource(this.commandeService);
 displayedColumns = ['IdComd','date_ar_cmd','Etat_cmd' ,'clientIdClient'];
 public  HoriChart;  
 Qte_liv: number[]=[];
 Qte_NonLiv : number[]=[]; 
  ngOnInit(): void 
  {
    this.Qte_NonLiv[0]=0; 
    this.Qte_liv[0]=0; 
    this.getCommandes();
    this.HoriChart=  new Chart("bar-chart-horizontal",
     {
      type: 'horizontalBar',
      data: {
        labels: ["Livré", "Non Livré"],
        datasets: [
          {
            label: "Nombre  des commandes",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [this.Qte_liv,this.Qte_NonLiv],
            
          }
        ]
      },
      options: {
        legend: { display: true },
        title: {
          display: true,
          text: 'Etats global des commandes '
        }
      }
  });
  }

  getCommandes() {
    return this.commandeService.getCommandes()
               .subscribe(
                 pieces => {
                  console.log(pieces);
                  this.cmds = pieces
                  for(var i=0; i<this.cmds.length;i++)
                  {
                    if(this.cmds[i].Etat_cmd=="non livrée")
                    {
                      this.Qte_NonLiv[0]++; 

                    }
                    else if(this.cmds[i].Etat_cmd=="livrée")
                    {
                      this.Qte_liv[0]++; 
                    }
                  }
                  console.log("La quantité  non livré "+ this.Qte_NonLiv[0])
                  console.log("La quantité   livré "+ this.Qte_liv[0])

                 }
                );
 }
}


export class CommandeDataSource extends DataSource<any> {
  constructor(private api: CommandeService) {
    super()
  }

  connect() {
    return this.api.getCommandes()
  }

  disconnect() {

  }
}