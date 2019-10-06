import { Component, OnInit } from '@angular/core';
import { Client } from '../Client';
import { ClientService } from '../client.service'; 
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
 import {PiecesParClient} from '../PiecesParClient'
 import {Chart} from 'chart.js';
import { stringify } from '@angular/core/src/util';
import {PiecesLivParClients} from '../PiecesLivParClients'; 


@Component({
  selector: 'app-client-details',
  templateUrl: './cls-details.component.html',
  styleUrls: ['./cls-details.component.css']
})
export class ClientDetailsComponent implements OnInit 
{
 
  client = new Client() ;
  submitted = false;
  message: string;
  NbrPieces : number[];
  NbrPiecesCom : number[]; 
 
  PieChart=[];
  couleurs =[]; 
  couleurs1=[]; 
  Designations : String[];

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('IdClient');
    console.log(id);
    this.clientService.getClient(id)
      .subscribe(piece => this.client = piece);
     
     this.NbrPieces = this.PiecesParClient();
     this.NbrPiecesCom=this.PiecesComParClient();
      this.Designations=this.DesignationParClient(); 
      console.log(this.Designations)
      this.couleurs=this.getRandomColorEachEmployee(); 
      this.couleurs1=this.getRandomColorEachEmployee(); 

      var randomColorGenerator = 
      function () { return '#' + (Math.random().toString(16) + '0000000')
      .slice(2, 8); }; 

this.PieChart = new Chart('pieChart', {
    type: 'bar',
  data: {
  labels: this.Designations,
   datasets: [{      
       label: "nombre de pieces commandés  ",  
       data: this.NbrPiecesCom, 
       backgroundColor: this.couleurs,},
   
   {
    label: "nombre de pieces livré ",  
    data: this.NbrPieces, 
    backgroundColor: this.couleurs1,}]

   
   
  }, 
  options: {
    plugins: {
      labels: {
        // precision for percentage, default is 0
        precision: 2,

        // identifies whether or not labels of value 0 are displayed, default is false
       // showZero: true,

        // font size, default is defaultFontSize
        fontSize: 18,

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
       // position: 'default',

        // draw label even it's overlap, default is true
        // bar chart ignores this
       // overlap: true,

      //   show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
        showActualPercentages: true,
      }},
   title:{
       text:" Nombre de piéces livrés ",
       display:true,
   },
   responsive: true, 
   scaleShowVerticalLines: false,

    }
  });
  }

 //quantité livré 
  PiecesParClient(): number[] 
 {
var pieceLivparClient : PiecesLivParClients[];
  var Qte : number[]=[]; 
  const id = +this.route.snapshot.paramMap.get('IdClient');
  console.log(id); 
  this.clientService.getPiecesLivClient(id).subscribe
  (piece => {
      pieceLivparClient = piece
      pieceLivparClient.forEach(function (piece) {
        console.log("coucou"+ piece.NbrPieces)
        Qte.push(piece.NbrPieces); 
      
    });
    console.log(Qte); 


});
 
      return Qte ; 
  
 }
//quantité commandé 
 PiecesComParClient(): number[] 
 {
var pieceparClient : PiecesParClient[] ; 

  var Qte : number[]=[]; 
  const id = +this.route.snapshot.paramMap.get('IdClient');
  console.log(id); 
  this.clientService.getPiecesClient(id) .subscribe
  (piece => {
      pieceparClient = piece
      console.log(pieceparClient);
      pieceparClient.forEach(function (piece) {
        console.log("coucou"+ piece.NbrPiecesCom)
        Qte.push(piece.NbrPiecesCom); 
      
    });
    console.log(Qte); 


});
 
      return Qte ; 
  
 }


 DesignationParClient(): string[] 
 {
var pieceparClient : PiecesParClient[] ; 

  var Qte : string[]=[]; 

  const id = +this.route.snapshot.paramMap.get('IdClient');
  console.log(id); 
  this.clientService.getPiecesClient(id) .subscribe
  (piece => {
      pieceparClient = piece
      console.log(pieceparClient);
      pieceparClient.forEach(function (piece) {
        console.log("coucou"+ piece.DesignP)
        Qte.push(piece.DesignP); 
      
    });
    console.log(Qte); 


});
    
   return Qte ;  
 }


  update(): void {
    this.submitted = true;
    this.clientService.updateClient(this.client)
        .subscribe(() => this.message = "client modifié !");
  }
 
  delete(): void {
    this.submitted = true;
    this.clientService.deleteClient(this.client.IdClient)
        .subscribe(()=> this.message = "client supprimé !");
  }
 
  goBack(): void {
    this.location.back();
  }



getRandomColor() 
  {
  var letters = '0123456789ABCDEF'.split(''); 
  var color = '#'  
  for (var i = 0; i < 6; i++) 
  { color += letters[Math.floor(Math.random() * 16)]; 
   } 
   
   console.log(color); 
  return color; 
} 
  
getRandomColorEachEmployee() 
  {
    const id = +this.route.snapshot.paramMap.get('IdClient');
    console.log("9aw9aw"); 
    var count=0; 
    var data =[]; 
    var pieces=[];
    this.clientService.getPiecesClient(id) .subscribe
  (piece => {
      pieces = piece
      console.log(pieces);
      pieces.forEach(function (piece) {
        count++; 
        console.log("helo"+count); 
        });
    for (var i = 0; i < count; i++) 
    { 
     data.push(this.getRandomColor());
    } 
}); 

    return data;
} 

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}