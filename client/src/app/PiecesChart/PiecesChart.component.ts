import { Component,OnInit, ɵelementStyleProp } from '@angular/core';
import {Chart} from 'chart.js';
import { ProduitService } from '../produit.service';
import { DataSource } from '@angular/cdk/collections';
import { Piece } from '../Piece';

@Component({
  selector: 'app-root',
  templateUrl: './PiecesChart.component.html',
  styleUrls: ['./PiecesChart.component.css']
})
export class PiecesChartComponent implements OnInit 
{
 public  BarChart=[];
 public  PieChart;  
  constructor(private ProduitService: ProduitService) {}
 public  piece: Piece[]= [];
 public  Qte_disp: number[]=[];
  Qte_indisp : number[]=[]; 
  Prix : number[];  
  Quantité : number[]= []; 
  public submitted =false ; 

  ngOnInit()
  {    
     this.submitted = false;
     this.getPiecesRS(); 
     this.getNbrPiecesDis() ;
     this.Prix = this.getPrixPieces();  
     console.log("ligne ngOnInt")
     console.log(this.Prix); 
     this.Quantité=this.getQtePieces(); 
     console.log("ligne ngOnInt")
     console.log(this.Quantité); 
     
     console.log("la quantité dispo "+ this.Qte_indisp[1])  
     console.log("la quantité pas  dispo "+ this.Qte_indisp[0])  

/*for (var i = 0; i < this.pieces.length; i++) {
    this.Prix[i] = this.pieces[i].getPrix();
    this.Quantité[i] = this.pieces[i].getQte_p();
      }*/
//Bar chart:
/* ngOnInit(): void {
     this.getPiecesRS();
  }
*/
  
this.BarChart = new Chart('barChart', {
  type: 'line',
data: {
 labels:this.Quantité,
 datasets: [{
    label: 'Le prix en fonction de la quantité ',
    data: this.Prix, 
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)'
         
     ],
     borderColor: [
         'rgba(255,99,132,1)'
         
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});


// pie chart:
this.PieChart = new Chart('pieChart', {
    
  type: 'pie',
  data: {
   labels: ["Disponible en stock ", "en rupture de stock"],
   datasets: [{
       label: '# of Votes',
       data: [this.Qte_disp, this.Qte_indisp],
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
   title:{
       text:"Etat du stock ",
       display:true , 
   }, 
   onClick :function(e) {        
    console.log("heeeeellloo from izmir"); 
    this.submitted=false;
     
    var activePoints = this.getElementsAtEvent(e);
     // => activePoints is an array of points on the canvas that are at the same position as the click event.
    
    if(activePoints.length > 0)
 {
   //get the internal index of slice in pie chart
   var clickedElementindex = activePoints[0]["_index"];

   //get specific label by index 
   var label = this.data.labels[clickedElementindex];

   //get value by index      
   //var value = this.PieChart.data.datasets[0].data[clickedElementindex];

   if(label=="en rupture de stock")
   {   
       console.log("en rupt ")
       this.submitted=true;
       console.log(this.submitted);  
       setTimeout(function() {
    this.submitted = false;
    console.log(this.submitted);
    }.bind(this), 10000); 
   }
   
     
 }
     
   },
   scales: {
       yAxes: [{
           ticks: {
               beginAtZero:true
           }
       }]
   }
  }
  });

  console.log(this.submitted);

  }

  
Sub() : void {
        this.submitted=true;  
        console.log(this.submitted) 
    }
    
getPiecesRS() {
    console.log("rani f getPiecesRs")

    var count: number  =0 ; 
    var piecesRS : Piece[]=[]; 
     return this.ProduitService.getPiecesRS()
               .subscribe(
                 pieces => {
                  console.log(pieces);
                  piecesRS = pieces
                   count =  piecesRS.length;
                   console.log("rani f getPiecesRs"+ count  )
                   this.Qte_indisp[0] = count ; 
                    
                 }

                );
       
 }

getPrixPieces()  {

    var  Prix : number[]=[];  
   var  Quantité : number[]= [];    console.log("helo")
 this.ProduitService.getPieces()
               .subscribe(
                 pieces => {
                  console.log(pieces + "lol");
                  this.piece= pieces  as Piece[]  
                  var i=0; 
                  this.piece.forEach(function (piece) {
                      console.log("coucou"+piece.Prix_p)
                      Prix.push(piece.Prix_p); 
                    i++; 
                  });
                  console.log(Prix); 

                 }
                );

                return Prix ; 

    
                
                  
 }

 
getQtePieces() {

    var  Qte : number[]=[];  
  console.log("helo")
 this.ProduitService.getPieces()
               .subscribe(
                 pieces => {
                  console.log(pieces + "lol");
                  this.piece= pieces  as Piece[]  
                  var i=0; 
                  this.piece.forEach(function (piece) {
                      console.log("coucou"+piece.Qte_p)
                      Qte.push(piece.Qte_p); 
                    i++; 
                  });
                  console.log(Qte); 

                 }
                );
                return Qte ; 
                 
 }

 getNbrPiecesDis() {

    console.log("helo"); 
    var piece : Piece[]=[];
    var count ;  
  return this.ProduitService.getPieces()
                 .subscribe(
                   pieces => {
                    console.log(pieces + "lol");
                    piece= pieces  as Piece[]   
                    console.log(piece.length)
                    console.log(this.Qte_indisp[0])  
                    console.log(piece.length - this.Qte_indisp[0])

                    this.Qte_disp[0]= piece.length - this.Qte_indisp[0];                     });

 }

 public chartClicked(): boolean  {

    console.log("c est vrai")

    var activePoints = this.PieChart.getElementsAtEvent();
    console.log(); 
     // => activePoints is an array of points on the canvas that are at the same position as the click event.
    
    if(activePoints.length > 0)
 {
   //get the internal index of slice in pie chart
   var clickedElementindex = activePoints[0]["_index"];

   //get specific label by index 
   var label = this.PieChart.data.labels[clickedElementindex];

   //get value by index      
   var value = this.PieChart.data.datasets[0].data[clickedElementindex];

   if(value=="en rupture de stock")
   {
      return true; 
   }

    
  }
 
 
  
                    

}     


  

}            
                   
  
  
  
