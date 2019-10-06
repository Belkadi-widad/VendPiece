import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BonLiv} from './BonLiv';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class BonLivService {   
   private cmdsUrl = 'http://localhost:3000/users/bonlivs';  // URL to web api

  constructor( 
    private http: HttpClient
  ) { }
 
  getBLs(): Observable<BonLiv[]> {
    return this.http.get<BonLiv[]>(this.cmdsUrl)
  }
 
  getBL(IdBL: number): Observable<BonLiv> {
    console.log(IdBL); 
    const url = `${this.cmdsUrl}/${IdBL}`;
    console.log(this.http.get<BonLiv>(url))
    return this.http.get<BonLiv>(url);
  }
 
  addBL(customer: BonLiv): Observable<BonLiv> {
    console.log("heeey")
    return this.http.post<BonLiv>(this.cmdsUrl, customer, httpOptions);
  }
 
  deleteBL (customer: BonLiv | number): Observable<BonLiv> {
    const id = typeof customer === 'number' ? customer: customer.IdBL;
    const url = `${this.cmdsUrl}/${id}`;
 
    return this.http.delete<BonLiv>(url, httpOptions);
  }
 
  updateBL (customer: BonLiv): Observable<any> {
    return this.http.put(this.cmdsUrl, customer, httpOptions);
  }
  
}