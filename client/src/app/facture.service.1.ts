import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Facture} from './Facture';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class FactureService {   
   private cmdsUrl = 'http://localhost:3000/users/facs';  // URL to web api

  constructor( 
    private http: HttpClient
  ) { }
 
  getFacts(): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.cmdsUrl)
  }
 
  getFact(idFact: number): Observable<Facture> {
    console.log(idFact); 
    const url = `${this.cmdsUrl}/${idFact}`;
    return this.http.get<Facture>(url);
  }
 
  addFact(customer: Facture): Observable<Facture> {
    console.log("heeey")
    return this.http.post<Facture>(this.cmdsUrl, customer, httpOptions);
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