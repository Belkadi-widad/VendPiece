import { Component, OnInit } from '@angular/core';
import { BonLiv } from '../BonLiv';
import { BonLivService } from '../BonLiv.service';
import { Location } from '@angular/common';
import {Facture } from '../Facture'; 
import {FactureService } from '../facture.service'; 

@Component({
  selector: 'app-add-fact',
  templateUrl: './add-fact.component.html',
  styleUrls: ['./add-fact.component.css']
})
 
export class AddFactureComponent implements OnInit{
  
  fact = new Facture();
  submitted = false;
  bls: BonLiv[];

  constructor(
    private factureService: FactureService,
    private location: Location,
    private bonlivservice : BonLivService, 
  ) { }

  ngOnInit(): void {
    this.getBLs();
 }

 getBLs() {
   return this.bonlivservice.getBLs()
              .subscribe(
                pieces => {
                 this.bls = pieces
                }
               );
}
  newFact(): void {
    this.submitted = false;
    this.fact = new Facture();
  }
 
 addFact() {
   this.submitted = true;
   console.log("heeey2")

   this.save();
 }
 
 
  goBack(): void {
    this.location.back();
  }
 
  private save(): void {
    this.factureService.addFact(this.fact)
        .subscribe();
  }
}