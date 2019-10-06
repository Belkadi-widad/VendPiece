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
export class RelanceService {   
    
   private cmdsUrl = 'http://localhost:3000/users/rel';  // URL to web api

  constructor( 
    private http: HttpClient
  ) { }
 
  getFacts(): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.cmdsUrl)
  }
 
  
}