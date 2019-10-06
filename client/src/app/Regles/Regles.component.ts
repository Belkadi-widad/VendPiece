import { Component, OnInit } from '@angular/core';
import { Regle } from '../Réglé';
import { RegleService } from '../regle.service';
import { LC } from '../LC';
import { ActivatedRoute, Params } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import {Chart} from 'chart.js';
import { Subject } from 'rxjs';

 
@Component({
  selector: 'app-piece',
  templateUrl: './Regles.component.html',
  styleUrls: ['./Regles.component.css']
})
 
export class RegsComponent  implements OnInit 
{
 


  constructor(private regService: RegleService,  private route: ActivatedRoute,
    ) {}

  regs: Regle[];
  LineChart : []; 
  dataSource = new RegleDataSource(this.regService,this.route);
  displayedColumns = ['num_fact','date','montant_reg'];
  Montant: number;
  DataSets: any =[]; 


  ngOnInit(): void {

  console.log("where is the probleme"); 
  this.Montant=0; 
  this.CreateDataSets(); 
  this.LineChart =new Chart("line-chart",{type:'line',
  data: this.data() ,  

  options: {
    title: {
      display: true,
      text: 'Les reglements des Factures par mois '
    }, 
      responsive: true,
      maintainAspectRatio: false,
      animation: {
          duration: 0
      },
      hover: {
          animationDuration: 0
      },
      responsiveAnimationDuration: 0
  
  }
 }); 

 /* this.LineChart.data= { 

  }*/
  /*
   var  LineChart=new Chart("line-chart", {
      type: 'line',
      data: {
       // datasets : [],
        
      },
    
      options: {
        title: {
          display: true,
          text: 'World population per region (in millions)'
        }
      }
    });*/
 //    this.addData();
    
  }

  data() : any {

   console.log("this.DataSets")
   var data = {
     labels: ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","Octobre","Novembre","Decembre"],
     datasets : this.DataSets, 
     // , 
}
   return data; 
  }

  public displayMontant(){
    console.log(this.Montant);
  }
public  CreateDataSets() 
  {
     var DataSets = []; 
     var labels =[]; 
     var data =[]; 
     return  this.regService.getRegs().subscribe(
      pieces => {

        this.regs = pieces 
        console.log(this.regs.length)  
        for (let index = 0; index < this.regs.length; index++) {
       
          var element = this.regs[index].num_fact;
          labels.push(element);
       }     

      //créer les datasets 

     for (let index = 0; index < labels.length; index++) {
      var newDataSet = {
        label: labels[index],
        fillColor: false ,
       strokeColor: "rgba(187,205,151,0.8)",
       highlightFill: "rgba(187,205,151,0.75)",
        highlightStroke: "rgba(187,205,151,1)",
        data: this.MontantFac(labels[index]), 

           }
        console.log(newDataSet.label)
        console.log(newDataSet.data)
        DataSets.push(newDataSet); 
        console.log(DataSets)
        this.DataSets=DataSets ; 
        console.log(this.DataSets)
        } 

  
      }
      );
     
    
  
    
  }
//fonction qui donne le data de chaque dataset 

 public MontantFac(IdFact : number) 
 {
   var data =[];
   
  //  for(let i=1 ;i<=9; i++)
  //  { 
  //    var  j : String; 
  //    j="0"+i ; 
  //    this.MontantParMois(IdFact,j); 
  //    console.log(this.Montant)
  //    data.push(this.Montant); 
  //  }
    this.MontantParMois(IdFact,"01")
  //  data.push(this.Montant); 
  //  this.MontantParMois(IdFact,"11")
  //  data.push(this.Montant); 
  //  this.MontantParMois(IdFact,"12")

   data.push(this.Montant);
   console.log(data);
   return data ; 


 }

public GetRegs(idFact: number)
{
  let facture: Regle; 
  var subject = new Subject<Regle>(); 
  console.log(this.Montant); 
 this.regService.getRegParMois(idFact)
  .subscribe(
    pieces => {
      pieces.map(item => {

        facture=item;
        console.log(facture);
        subject.next(facture);
      });
    });
return subject; 

}
public MontantParMois(idFact: number, Mois : String) 
{
  
 // var subject = new subject<number>(); 
  console.log(this.Montant); 
   this.regService.getRegParMois(idFact)
  .subscribe(
    pieces => {
      
      console.log(pieces);
      this.Montant=0; 
      for (let index = 0; index < pieces.length; index++) 
      {
        
        var date : String ; 
        date = pieces[index].date.toString(); 
        var mois ; 
        mois = date.split('-')[1]; 
        console.log(mois);
        if(mois==Mois)
        {
         console.log("from if"); 
           this.Montant+=pieces[index].montant_reg; 
           console.log(this.Montant); 
           
        }
         
      }
      
      console.log(this.Montant); 
      }); 

 
}


}

export class RegleDataSource extends DataSource<any> {
  constructor(private api: RegleService,private route: ActivatedRoute) {
    super()
  }
  

  connect() {
    return this.api.getRegs(); 
  }

  disconnect() {

  }

  
}