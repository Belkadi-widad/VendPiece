import { Component, OnInit } from '@angular/core';
import { Facture } from '../Facture';
import {BonLiv} from '../BonLiv'
import { FactureService } from '../facture.service';
import {BonLivService} from '../BonLiv.service'; 
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {MontantProd} from '../mantant-prod'; 
import {MontantProdService} from '../mantant-prod.service'
import { DataSource } from '@angular/cdk/collections';
import {Chart} from 'chart.js';
 import {FactureNR} from '../FactureNR'
 import {RegleService} from '../regle.service'
 import { ChartModule } from 'chart.js';
 import 'chartjs-plugin-labels';
 
@Component({
  selector: 'app-facture-details',
  templateUrl: './facture-details.component.html',
  styleUrls: ['./facture-details.component.css']
})
export class FactureDetailsComponent implements OnInit {
 
   bls : BonLiv[];
   facts : MontantProd[]; 
  submitted = false;
  message: string;
  fact = new Facture(); 
  public  DauChart;  

  constructor(
    private bonlivService: BonLivService,
    private factureService: FactureService,
    private route: ActivatedRoute,
    private location: Location, 
    private mantprodservice : MontantProdService,
    private RegleService : RegleService, 
  ) {}
  dataSource = new ProduitFactureSource(this.mantprodservice, this.route);
  displayedColumns = ['IdPiece','Designation','Montant'];
  public  PieChart;  
  Reg: number[]=[];
  NonReg : number[]=[]; 

  ngOnInit(): void {   
    this.Reg[0]=0;
    this.NonReg[0]=0; 
    this.getBLs();
   // this.getMontant();  
   const id = +this.route.snapshot.paramMap.get('IdFact');
    console.log(id);
    this.factureService.getFact(id)
      .subscribe(piece => 
        {this.fact = piece
         this.Reg[0]=this.fact.montant_reg; 
         this.NonReg[0]=this.fact.prix_tot-this.Reg[0]; 
         console.log("je suis dans get montant : montant réglé ",this.Reg[0])
         console.log("je suis dans get montant : montant  non réglé ",this.NonReg[0])
      });  

     // this.getProds();
     
// pie chart:
this.DauChart = new Chart('dauChart', {
    
  type: 'doughnut',
data: {
 labels: ["Reglé", "non Réglé "],
 datasets: [{
     label: '# of Votes(Da)',
     data: [this.Reg,this.NonReg],
     backgroundColor: [
         '#331f49',
         '#ab0000',
         
     ],
     borderColor: [
         'rgba(51,31,60)',
         'rgba(165,0,0)',
         
     ],
     borderWidth: 1
 }]
}, 
options: {
plugins: {
  labels: {
    // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
  //  render: 'value',

    // precision for percentage, default is 0
    precision: 0,

    // identifies whether or not labels of value 0 are displayed, default is false
    showZero: false,

    // font size, default is defaultFontSize
    fontSize: 12,

    // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
    fontColor: '#000',

    // font style, default is defaultFontStyle
    fontStyle: 'normal',

    // font family, default is defaultFontFamily
    fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // draw text shadows under labels, default is false
    textShadow: true,

    // text shadow intensity, default is 6
    shadowBlur: 10,

    // text shadow X offset, default is 3
    shadowOffsetX: -5,

    // text shadow Y offset, default is 3
    shadowOffsetY: 5,

    // text shadow color, default is 'rgba(0,0,0,0.3)'
    shadowColor: 'rgba(255,0,0,0.75)',

    // draw label in arc, default is false
    // bar chart ignores this
    arc: true,

    // position to draw label, available value is 'default', 'border' and 'outside'
    // bar chart ignores this
    // default is 'default'
    position: 'default',

    // draw label even it's overlap, default is true
    // bar chart ignores this
    overlap: true,

    // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
    showActualPercentages: true,

    // set images when `render` is 'image'
   

    // add padding when position is `outside`
    // default is 2
    outsidePadding: 4,

    // add margin of text when position is `outside` or `border`
    // default is 2
    textMargin: 4
  }
},
 title:{
     text:"Etat de la facture  ",
     display:true , 
 }, 
 animation: {
  animateScale: true,
  animateRotate: true
 }, 
}

,
scales: {
    yAxes: [{
        ticks: {
            beginAtZero:true
        }
    }]
  }
   
  });
 
    

}

  getProds(){
    const id = +this.route.snapshot.paramMap.get('IdFact');
    console.log(id);
    this.mantprodservice.getMontProd(id).subscribe(
                       pieces => {
                        this.facts = pieces
                          }
                       );
  }

  getBLs() {
    return this.bonlivService.getBLs()
               .subscribe(
                 pieces => {
                  this.bls = pieces
                 }
                );
 }

  update(): void {
    this.submitted = true;
    this.factureService.updateFact(this.fact)
        .subscribe(() => this.message = "Facture  Modifiée !");
  }
 
  delete(): void {
    this.submitted = true;
    this.factureService.deleteFact(this.fact.idFact)
        .subscribe(()=> this.message = "Facture Supprimée !");
  }
 
  goBack(): void {
    this.location.back();
  }

     
getMontant() {
  console.log("rani f getPiecesRs")

  var count: number  =0 ; 
  var FactureNR : FactureNR; 
  const id = +this.route.snapshot.paramMap.get('IdFact');
  console.log(id)
   return this.RegleService.getFactNR(id)
             .subscribe(
               pieces => {
                console.log(pieces);
                FactureNR = pieces; 
                if(FactureNR)
                {console.log("rani f getMontantReg"+  FactureNR.montant_reg); 
                     this.Reg[0] = FactureNR.montant_reg ; 
                     this.NonReg[0]=FactureNR.prix_tot-this.Reg[0]; 
                     console.log("je suis dans get montant : montant réglé ",this.Reg[0])
                     console.log("je suis dans get montant : montant  non réglé ",this.NonReg[0])

                }
                 else { 
                  this.Reg[0]=this.fact.prix_tot; 
                  this.NonReg[0]=0; 
                  console.log("je suis dans get montant : montant réglé ",this.Reg[0])
                  console.log("je suis dans get montant : montant  non réglé ",this.NonReg[0])

                }
                  
               }

              );
     
}

}

export class ProduitFactureSource extends DataSource<any> {
  constructor(private api: MontantProdService, private route : ActivatedRoute) {
    super()
  }

  connect() {    
    const id = +this.route.snapshot.paramMap.get('IdFact');
    console.log(id);

    return this.api.getMontProd(id)
    
  }

  disconnect() {

  }
}