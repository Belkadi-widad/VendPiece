import { Component, OnInit } from '@angular/core';
import { BonLiv } from '../BonLiv';
import { BonLivService } from '../BonLiv.service';
import { Location } from '@angular/common';
import {Facture } from '../Facture'; 
import {Regle} from '../Réglé'; 
import {RegleService } from '../regle.service'; 
import { FactureNR } from '../FactureNR';


@Component({
  selector: 'app-add-fact',
  templateUrl: './add-regle.component.html',
  styleUrls: ['./add-regle.component.css']
})
 
export class AddRegleComponent implements OnInit{
  
  reg = new Regle();
  submitted = false;
  facs: FactureNR[];

  constructor(
    private regleService: RegleService,
    private location: Location,
    private bonlivservice : BonLivService, 
  ) { }

  ngOnInit(): void {
    this.getFacs();
 }

 getFacs() {
   return this.regleService.getFacts().subscribe(
                pieces => {
                 this.facs = pieces
                }
               );
  }

  newReg(): void {
    this.submitted = false;
    this.reg = new Regle();
  }
 
 addReg() {
   this.submitted = true;
   console.log("heeey2")

   this.save();
 }
 
 
  goBack(): void {
    this.location.back();
  }
 
  private save(): void {
    this.regleService.addReg(this.reg)
        .subscribe();
  }
}