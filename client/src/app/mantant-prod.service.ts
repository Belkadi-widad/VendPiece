import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MontantProd } from './mantant-prod';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class MontantProdService {   
   private cmdsUrl = 'http://localhost:3000/users/mants';  // URL to web api

  constructor( 
    private http: HttpClient,
  ) { }
 
  getMontProd(num_fact: number): Observable<MontantProd[]> {
    const url = `${this.cmdsUrl}/${num_fact}`;
    console.log(url); 
    return this.http.get<MontantProd[]>(url);
  }

}