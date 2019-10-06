import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieceDetailsComponent } from './pieces-details/piece-details.component';
import { AddPieceComponent } from './add-piece/add-piece.component';
import { PieceComponent } from './Piéce/piéce.component';
import {AddCommandeComponent} from './add-cmd/add-cmd.component'
import {CommandeDetailsComponent} from './cmds-details/cmds-details.component'
import {CommandeComponent} from './Commande/commande.component' ; 
import {AddClientComponent} from './add-client/add-client.component'
import {ClientDetailsComponent} from './cls-details/cls-details.component'
import {ClientComponent} from './Client/client.component' ; 
import {RupturePieceComponent} from './ruptures_stock/prod-rupt-stock.component'
const routes : Routes =[
  { 
     path: 'pieces', 
     component: PieceComponent 
   },
   { 
     path: 'pieces/add', 
     component: AddPieceComponent 
   },
   { 
     path: 'pieces/:IdPiece', 
     component: PieceDetailsComponent 
   },
   {
    path:'cmds',
    component : CommandeComponent ,
   },
   { 
    path: 'cmds/add', 
    component: AddCommandeComponent 
  },
  { 
    path: 'cmds/:IdComd', 
    component: CommandeDetailsComponent 
  }, 
  {
    path:'cls',
    component : ClientComponent 
   },
   { 
    path: 'cls/add', 
    component: AddClientComponent 
  },
  { 
    path: 'cls/:IdClient', 
    component: ClientDetailsComponent 
  }, 
  { 
    path: 'pieces/rup', 
    component: RupturePieceComponent 
  },
   
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
