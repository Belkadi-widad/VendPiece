import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import {enableProdMode} from '@angular/core';
import {Chart} from 'chart.js';
enableProdMode();

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent} from './profile/profile.compnent'
import { LoginComponent} from './login/login.component'
import { RegisterComponent} from './register/register.component'
import { HomeComponent} from './home/home.component'
import {AuthentificationService} from './authenfication.service'
import {AuthGuardService} from './auth-guard.service'
import { ProduitService } from './produit.service';
import {PieceComponent} from './Piéce/piéce.component'
import { ClientService } from './client.service';
import { CommandeService } from './commande.service';
import {AddPieceComponent } from './add-piece/add-piece.component'
import{PieceDetailsComponent} from './pieces-details/piece-details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatPaginatorModule,MatCardModule,
  MatProgressSpinnerModule,
  MatSortModule,MatInputModule,
  MatTableModule,MatToolbarModule,
  MatMenuModule, MatButtonModule, 
  MatSidenavModule, MatIconModule,
   MatListModule,MatNativeDateModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {  ReactiveFormsModule } from '@angular/forms';
import {LCService} from './ligne-comd.service'; 

import {AddCommandeComponent} from './add-cmd/add-cmd.component'
import {CommandeDetailsComponent} from './cmds-details/cmds-details.component'
import {CommandeComponent} from './Commande/commande.component' ; 

import {AddClientComponent} from './add-client/add-client.component'
import {ClientDetailsComponent} from './cls-details/cls-details.component'
import {ClientComponent} from './Client/client.component' ; 

import {ListeProduitLcComponent} from './ListeProduits-lc/ListesProduits.component'
import{AddLCComponent} from  './add-prod-com/add-prod-com.component'
import {LCsComponent} from './lignes-comds/lignes-comds.component'

import {AddBonLivComponent} from './add-BL/add-BL.component'
import {BonLivDetailsComponent} from './BonLiv-details/BonLiv-details.component'
import {BonLivComponent} from './BonLiv/BonLiv.component' ; 

import {AddFactureComponent} from './add-fact/add-fact.component'
import {FactureDetailsComponent} from './facture-details/facture-details.component'
import {FactureComponent} from './factures/factures.component' ; 
import { FactureService } from './facture.service';

import {RupturePieceComponent} from './ruptures_stock/prod-rupt-stock.component'

import {AddLivreComponent} from './add-livré/add-livré.component'
import {LivréService} from './livré.service'
import {LivrésComponent} from './Livrés/Livrés.component'
import{ LivréDetailsComponent} from './Livré-details/Livré-details.component'
import {MontantProdService} from './mantant-prod.service'

import {RegleService} from './regle.service'
import {AddRegleComponent} from './add-regle/add-regle.component'
import {RegsComponent} from './Regles/Regles.component'

import {RelanceService} from './relance.service'
import {RelanceComponent} from './Relance/relance.component'
import {PiecesChartComponent}  from './PiecesChart/PiecesChart.component'


const routes : Routes =[
  {path:'' ,
   component : HomeComponent },
   
  {path:'login' ,
   component : LoginComponent},
  {path:'register' ,
     component : RegisterComponent},
  {
    path:'profile', 
    component : ProfileComponent ,
     canActivate: [AuthGuardService]
   },
   
   
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
  path: 'chart', 
  component:  PiecesChartComponent

  },

 {
  path:'cmds',
  component : CommandeComponent 
 },
 { 
  path: 'cmds/add', 
  component: AddCommandeComponent 
},
{ 
  path: 'cmds/:IdComd', 
  component: CommandeDetailsComponent 
}
 ,
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
  path: 'cls/:IdClient', 
  component: ClientDetailsComponent 
},
{
  path:'bonlivs',
  component : BonLivComponent 
 },
 { 
  path: 'bonlivs/add', 
  component: AddBonLivComponent 
},
{ 
  path: 'bonlivs/:IdBL', 
  component: BonLivDetailsComponent 
},
{
  path:'lc/afficher',
  component : ListeProduitLcComponent

 },
 {
  path:'cmds/:IdComd/lc',
  component : LCsComponent

 },

 {
   path : 'lc/piecesNL/:num_ar_com',
   component : AddLivreComponent
 },

 { 
  path: 'cmds/:IdComd/lc/add', 
  component: AddLCComponent 
},
{ 
  path: 'cmds/NL', 
  component: AddBonLivComponent 
}, 

{ 
  path: 'cmds/NL', 
  component: BonLivDetailsComponent
}, 


{
  path:'facs',
  component : FactureComponent 
 },
 { 
  path: 'fac/add', 
  component: AddFactureComponent 
},
{ 
  path: 'facs/:IdFact', 
  component: FactureDetailsComponent 
},
{ 
  path: 'rupture', 
  component: RupturePieceComponent 
},
{
  path:  'livrés/add',
  component : AddLivreComponent 
},

{
  path:  'li',
  component : LivrésComponent 
},
{
  path : 'li/:IdBL/:IdPiece', 
  component : LivréDetailsComponent

}

, 
{ 
  path: 'bonlivs/:IdBL', 
  component: AddLivreComponent 

},
{
  path : 'mants/:IdFact', 
  component: FactureDetailsComponent

}, 
{
  path : 'reg/add' ,
  component : AddRegleComponent
}, 
{
  path : 'reg/FactureNL' ,
  component : AddRegleComponent
}, 

{
  path : 'reg' ,
  component : RegsComponent
}, 
 {
   path : 'rel', 
   component : RelanceComponent,
 }
]
@NgModule({
  
  declarations: [
    MainNavComponent,
    AppComponent, 
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ListeProduitLcComponent, 
    AddLCComponent,
    PiecesChartComponent,


    AddLivreComponent,
    LivrésComponent, 
    LivréDetailsComponent,

    ClientComponent,
    ClientDetailsComponent,
    AddClientComponent,

    PieceComponent,
    PieceDetailsComponent,
    AddPieceComponent , 
    RupturePieceComponent,

    CommandeComponent,
    CommandeDetailsComponent,
    AddCommandeComponent,
    LCsComponent, 

    AddBonLivComponent,
    BonLivComponent,
    BonLivDetailsComponent, 

    AddFactureComponent,
    FactureComponent,
    FactureDetailsComponent, 

    AddRegleComponent, 
    RegsComponent, 

    RelanceComponent, 

    
  ],

  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,

    MatSelectModule,
    AppRoutingModule, 
    FormsModule, 
    MatNativeDateModule,
    MatTableModule,MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,

    RouterModule.forRoot(routes), BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule

  ],
  providers: [RelanceService,RegleService,MontantProdService,LivréService,FactureService,LCService,CommandeService,AuthentificationService,AuthGuardService,ProduitService,ClientService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
