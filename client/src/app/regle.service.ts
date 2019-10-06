import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Facture} from './Facture';
import { Regle}  from './Réglé'
import {FactureNR} from './FactureNR'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class RegleService {   
   private cmdsUrl = 'http://localhost:3000/users/reg';  // URL to web api

  constructor( 
    private http: HttpClient
  ) { }
 
  //les factures non réglé ! 
  
  getFacts(): Observable<FactureNR[]> {
      const Url =`${this.cmdsUrl}/FactureNL` 
    return this.http.get<FactureNR[]>(Url)

  }
//les reglements d'une facture pour chaque mois 

getRegParMois(idFact: number): Observable<Regle[]> {
  console.log("kikou" + idFact)

  const Url =`${this.cmdsUrl}/Mois/${idFact}` 
  return this.http.get<Regle[]>(Url);
  
}

  getRegs(): Observable<Regle[]> {
    console.log("heeeyooo"); 
    return this.http.get<Regle[]>(this.cmdsUrl);  
  
   }
 
  getFact(idFact: number): Observable<Facture> {
    console.log(idFact); 
    const url = `${this.cmdsUrl}/${idFact}`;
    return this.http.get<Facture>(url);
  }
 
  getFactNR(idFact: number): Observable<FactureNR> {
    console.log(idFact); 
    const url = `${this.cmdsUrl}/FactureNL/${idFact}`;
    return this.http.get<FactureNR>(url);
    
  }

  addReg(customer: Regle): Observable<Regle> {
    console.log("heeey")
    return this.http.post<Regle>(this.cmdsUrl, customer, httpOptions);
  }
 
  deleteFact(customer: Facture | number): Observable<Facture> {
    const id = typeof customer === 'number' ? customer: customer.idFact;
    const url = `${this.cmdsUrl}/${id}`;
 
    return this.http.delete<Facture>(url, httpOptions);
  }
 
  updateFact(customer: Facture): Observable<any> {
    return this.http.put(this.cmdsUrl, customer, httpOptions);
  }
  
}